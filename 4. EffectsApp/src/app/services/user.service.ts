import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${environment.api}/users?per_page=6`).pipe(map(resp => resp['data']));
  }

  getUserById(id: string) {
    return this.http.get(`${environment.api}/users/${id}`).pipe(map(resp => resp['data']));
  }
}
