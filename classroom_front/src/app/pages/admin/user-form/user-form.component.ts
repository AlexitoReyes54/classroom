import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { IuserForm } from '../interfaces/IuserForm';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,private userSvc:UsersService) { }
  
  updating:boolean = false;
  userForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
    roleId: new FormControl(''),
  });
  

  id:string = this.activeRoute.snapshot.params['id'];

  ngOnInit(): void {
    this.checkIfCreateOrUpdate()
  }
  checkIfCreateOrUpdate(){
    if (this.id) {
      this.updating = true;
      this.loadUserData()
    }
  }

  onSubmit(){
    console.log(this.updating);
    
    if (this.updating) {
      this.sendDataForUpdateUser()
    }else{
      this.sendDataForCreateUser()
    }
    
    
  }

  sendDataForCreateUser(){
    this.userSvc.createUser(this.userForm.value)
    .subscribe(res => console.log(res)
    )
  }

  sendDataForUpdateUser(){
    this.userSvc.UpdateUser(this.userForm.value)
    .subscribe(res => console.log(res)
    )
  }

  setUserData(data:IuserForm){
   this.userForm.patchValue(data)
  }

  loadUserData(){
    this.userSvc.getOneUser(this.id)
    .subscribe(res =>{
      this.setUserData({
        name:res.name,
         id:res.id,
         password:res.password,
         roleId:res.roleId
       })
      
    }
    )
  }

}
