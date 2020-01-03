import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(private authSrv: AuthService) { }

  ngOnInit() {
  }

  onSubmit(data: any) {
    this.authSrv.createUser(data.name, data.email, data.password);
  }
}
