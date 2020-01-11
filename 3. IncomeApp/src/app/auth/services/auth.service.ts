import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as UIActions from '../../shared/ui.actions';
import * as AuthActions from '../auth.actions';
import { AppState } from '../../app.reducer';
import { User, UserObj } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubscription: Subscription = new Subscription();
  private user: User;

  constructor(private afAuth: AngularFireAuth, 
              private afDB: AngularFirestore,
              private router: Router, 
              private toastr: ToastrService,
              private store: Store<AppState>) { }

  initAuthListener() {
    this.afAuth.authState.subscribe((fbUser: firebase.User) => {
      if (fbUser) {
        this.userSubscription = this.afDB.doc(`${fbUser.uid}/user`).valueChanges().subscribe((userObj: UserObj) => {
          const user = new User(userObj);
          this.store.dispatch(new AuthActions.SetUserAction(user));
          this.user = user;
        });
      } else {
        this.user = null;
        this.userSubscription.unsubscribe();
      }
    });
  }

  createUser(name: string, email: string, password: string) {
    this.store.dispatch(new UIActions.ActivateLoadingAction());
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(resp => {
          const user: User = { uid: resp.user.uid, name, email };
          this.afDB.doc(`${user.uid}/user`).set(user).then(() => {
            this.router.navigate(['/']);
            this.store.dispatch(new UIActions.DeactivateLoadingAction());
          });
        })
        .catch(err => {
          this.store.dispatch(new UIActions.DeactivateLoadingAction());
          this.toastr.error(err['message'], 'Error');
        });
  }

  login(email: string, password: string) {
    this.store.dispatch(new UIActions.ActivateLoadingAction());
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(resp => { 
          this.router.navigate(['/']);
          this.store.dispatch(new UIActions.DeactivateLoadingAction());
        })
        .catch(err => {
          this.store.dispatch(new UIActions.DeactivateLoadingAction());
          this.toastr.error(err['message'], 'Error');
        });
  }

  isAuth() {
    return this.afAuth.authState.pipe(map(fbUser => { 
      fbUser === null && (this.router.navigate(['/login'])); 
      return fbUser !== null;
    }));
  }

  logout() {
    this.router.navigate(['/login']);
    this.afAuth.auth.signOut();
    this.store.dispatch(new AuthActions.UnsetUserAction());
  }

  getUser() {
    return { ...this.user };
  }
}
