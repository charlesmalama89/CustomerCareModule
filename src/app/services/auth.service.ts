import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { User } from '../models/user';


const BASE_URL = "https://hobbiton-customer-care-api.herokuapp.com/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  login(email: string, password: string) {
    return this.http.post<any>(`${BASE_URL}/auth/login`, { email, password }).pipe(
      map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.access_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      })
    );
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

}

