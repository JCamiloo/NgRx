import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, 
              private router: Router, 
              private toastr: ToastrService) { }

  initAuthListener() {
    this.afAuth.authState.subscribe((fbUser: firebase.User) => {
      console.log(fbUser);
    });
  }

  createUser(name: string, email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                    .then(resp => this.router.navigate(['/']))
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
