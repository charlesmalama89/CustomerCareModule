import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userConfrimDto } from '../models/confirmPassword.dto';
import { Observable } from 'rxjs';

const BASE_URL = "https://hobbiton-customer-care-api.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class ConfrimUserService {

  constructor(private http: HttpClient) { }

  confirmUser(userInfo: userConfrimDto): Observable<userConfrimDto>{
    console.log(userInfo);
    
    const result = this.http.patch<userConfrimDto>(`${BASE_URL}/auth/register`, userInfo);
    result.subscribe((res) => {
      console.log(res)
    });

    return result;
  }
}
