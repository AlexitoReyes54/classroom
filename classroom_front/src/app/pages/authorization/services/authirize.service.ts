import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { authRequestBody } from '../interfaces/authRequestBody';
import { credentials } from '../interfaces/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthirizeService {

  constructor(private http: HttpClient) { }

  private singInUrl:string = 'http://localhost:3000/api/v1/auth/singIn'

  authRequest(body:authRequestBody){
    const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');
     return this.http.post<credentials>(this.singInUrl,body,{headers:headers})
  }

}
