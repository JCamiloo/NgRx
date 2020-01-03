import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, 
              private afDB: AngularFirestore,
              private router: Router, 
              private toastr: ToastrService) { }

  initAuthListener() {
    this.afAuth.authState.subscribe((fbUser: firebase.User) => {
      console.log(fbUser);
    });
  }

  createUser(name: string, email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(resp => {
          const user: User = { uid: resp.user.uid, name, email };
          this.afDB.doc(`${user.uid}/user`).set(user).then(() => {
            this.router.navigate(['/'])
          });
        })
        .catch(err => this.toastr.error(err['message'], 'Error'));
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(resp => this.router.navigate(['/']))
        .catch(err => this.toastr.error(err['message'], 'Error'));
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
  }
}
