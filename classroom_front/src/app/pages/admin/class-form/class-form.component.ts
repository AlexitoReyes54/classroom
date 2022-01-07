import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Iclass } from '../../classes/interfaces/Iclass';
import { teacher } from '../interfaces/teacher';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { ClassesService } from '../services/classes.service';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {

  constructor(
    private classSvc:ClassesService,
    private activeRoute: ActivatedRoute,
    private userSvc:UsersService,
    private router: Router) { }

  teachers:teacher[] = [];
  classForm = new FormGroup({
    name: new FormControl(''),
    teacherId: new FormControl(''),
  });

  updating:boolean = false;
  ngOnInit(): void {
  this.getTeachersInfo()

  }

  setClassFormData(data:Iclass){
    this.classForm.patchValue(data)
   }

  
  getTeachersInfo(){
    this.userSvc.getTeachers()
    .subscribe(res =>{
      this.teachers = res;
      console.log(res);
      
    })
  }

  sendDataForCreateClass(){
    this.classSvc.createClass(this.classForm.value)
    .subscribe(res => console.log(res))
  }

  onSubmit(){
    this.sendDataForCreateClass()
    this.router.navigate(['/', 'admin']);
  }

}
