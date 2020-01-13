import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad{

  constructor(private authSrv: AuthService) { }

  canActivate() {
    return this.authSrv.isAuth();
  }

  canLoad() {
    return this.authSrv.isAuth().pipe(take(1));
  }
}
