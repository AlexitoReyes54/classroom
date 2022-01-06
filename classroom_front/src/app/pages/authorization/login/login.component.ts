import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthirizeService } from '../services/authirize.service';
import { credentials } from '../interfaces/credentials';
import { CredentialStorageService } from '../../../credential-storage.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    private authorizeService:AuthirizeService,
    private router:Router,
    private credentialsStorageService:CredentialStorageService) { }

  ngOnInit(): void {
  }
  
  loginForm = new FormGroup({
  name:new FormControl(''),
  password:new FormControl('')
});

  sendRequest(){
    this.authorizeService.authRequest(this.loginForm.value)
    .subscribe(res => {
      this.saveCredentials(res)
      this.checkIfIsAdmin(res)
    })
  }

  moveToNextPage(url:string){
    this.router.navigate([url])
  }

  checkIfIsAdmin(user:credentials){
    if (user.roleId === 2) {
      this.moveToNextPage('admin')
    }else if(user.roleId != undefined){
      this.moveToNextPage('home')
    }else{
      this.credentialsError()
    }
  }

  saveCredentials(credentials:credentials){
    this.credentialsStorageService.setCredentials(credentials);
  }

  credentialsError(){
    alert('Err in the credentials')
  }

}
