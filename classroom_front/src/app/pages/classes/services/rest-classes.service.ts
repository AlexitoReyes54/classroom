import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CredentialStorageService } from 'src/app/credential-storage.service';
import { classCard } from '../interfaces/classCard';
import { Iclass } from '../interfaces/Iclass';
import { student } from '../interfaces/student';
import { rollInClass } from '../interfaces/rollInClass';
@Injectable({
  providedIn: 'root'
})
export class RestClassesService {

  headers = new HttpHeaders()
  constructor(private http: HttpClient, private credentialStorage:CredentialStorageService) {
      
   }

  private updateToken(){
    this.headers = new HttpHeaders()
    .set('token', this.credentialStorage.getToken())
    .set('role',this.credentialStorage.getCredentials().roleId.toString());
  }

  getStudentClasses(studentId:string | number){
    this.updateToken()
     return this.http.get<classCard[]>(`http://localhost:3000/api/v1/classes/student/${studentId}`,{headers:this.headers})
     
  }

  getTeacherClasses(studentId:string | number){
    this.updateToken()
     return this.http.get<classCard[]>(`http://localhost:3000/api/v1/classes/teacher/${studentId}`,{headers:this.headers})
     
  }

  getOneClassById(classId: number | string){
    this.updateToken()
     return this.http.get<Iclass>(`http://localhost:3000/api/v1/classes/class/${classId}`,{headers:this.headers})
     
  }

  getOneClassStudents(classId: number | string){
    this.updateToken()
     return this.http.get<student[]>(`http://localhost:3000/api/v1/classes/students/${classId}`,{headers:this.headers})
  }

  getNotInClassStudets(classId: number | string){
    this.updateToken()
    return this.http.get<student[]>(`http://localhost:3000/api/v1/auth/not/${classId}`,{headers:this.headers})
  }

  addStudentToAClass(body:rollInClass){
    this.updateToken()
    return this.http.post(`http://localhost:3000/api/v1/session/add`,body,{headers:this.headers})
  }
  
}
