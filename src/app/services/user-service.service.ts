import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url ="http://localhost:8080/saveUser";
  
  constructor(private http: HttpClient) { }

  

  AddNewUser(user: User): Observable<number>
  {
    console.log("User object:: "+user);
    return this.http.post<number>(`${this.url}`, user);
  }

}
