import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private userSrv: UserService) { }

  ngOnInit() {
    this.users$ = this.userSrv.getUsers();
  }
}
