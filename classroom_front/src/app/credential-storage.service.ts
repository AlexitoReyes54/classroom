import { Injectable } from '@angular/core';
import { credentials } from './pages/authorization/interfaces/credentials';

@Injectable({
  providedIn: 'root'
})
export class CredentialStorageService {

  constructor() { }

  setCredentials(credentials:credentials){
    localStorage.setItem('credentials',JSON.stringify(credentials))
  }
  getCredentials():credentials{
      return JSON.parse(localStorage.getItem('credentials') || '{}');
  } 

  getToken(){
    return this.getCredentials().token
  }
  
}
