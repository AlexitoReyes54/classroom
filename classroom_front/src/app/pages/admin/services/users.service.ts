import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CredentialStorageService } from 'src/app/credential-storage.service';
import { teacher } from '../interfaces/teacher';
import { student } from '../../classes/interfaces/student';
import { IuserForm } from '../interfaces/IuserForm';
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

  getOneUser(id:string){
    this.updateToken()
    return  this.http.get<any>(`http://localhost:3000/api/v1/auth/user/${id}`,{headers:this.headers})
  }

  createUser(body:IuserForm){
    return  this.http.post(`http://localhost:3000/api/v1/auth/singUp`,body,{headers:this.headers})
  }

  UpdateUser(body:IuserForm){
    return  this.http.put(`http://localhost:3000/api/v1/auth/user`,body,{headers:this.headers})
  }

}
