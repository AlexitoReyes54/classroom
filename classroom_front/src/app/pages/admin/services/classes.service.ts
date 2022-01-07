import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CredentialStorageService } from 'src/app/credential-storage.service';
import { Iclass } from '../../classes/interfaces/Iclass';
import { teacher } from '../interfaces/teacher';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  

  headers = new HttpHeaders()
  constructor(private http: HttpClient,private credentialStorage:CredentialStorageService) { }

  private updateToken(){
    this.headers = new HttpHeaders()
    .set('token', this.credentialStorage.getToken())
    .set('role',this.credentialStorage.getCredentials().roleId.toString());
  }

  getAllClasses(){
    this.updateToken()
    return  this.http.get<Iclass[]>(`http://localhost:3000/api/v1/classes/all`,{headers:this.headers})
  }

  createClass(body:teacher){
    this.updateToken()
    return  this.http.post(`http://localhost:3000/api/v1/classes/create`,body,{headers:this.headers})
  }

}
