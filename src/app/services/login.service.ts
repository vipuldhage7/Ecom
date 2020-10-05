import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url ="http://localhost:8080/getUser";

  constructor(private http: HttpClient) { }

  userLogin(user: User): Observable<User>
  {
    console.log("User object:: "+user);
    return this.http.post<User>(`${this.url}`, user);
  }
}
