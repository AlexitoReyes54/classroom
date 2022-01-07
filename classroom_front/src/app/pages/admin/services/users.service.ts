import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CredentialStorageService } from 'src/app/credential-storage.service';
import { teacher } from '../interfaces/teacher';
import { student } from '../../classes/interfaces/student';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  headers = new HttpHeaders()
  constructor(private http: HttpClient,private credentialStorage:CredentialStorageService) { }

  private updateToken(){
    this.headers = new HttpHeaders()
    .set('token', this.credentialStorage.getToken())
    .set('role',this.credentialStorage.getCredentials().roleId.toString());
  }

  getTeachers(){
    this.updateToken()
    return  this.http.get<teacher[]>(`http://localhost:3000/api/v1/auth/teachers`,{headers:this.headers})
  }

  getStudents(){
    this.updateToken()
    return  this.http.get<student[]>(`http://localhost:3000/api/v1/auth/students`,{headers:this.headers})
  }

}
