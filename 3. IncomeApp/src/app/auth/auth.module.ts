import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { RouterModule, } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AngularFireAuthModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule {}