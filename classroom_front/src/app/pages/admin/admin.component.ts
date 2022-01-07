import { Component, OnInit } from '@angular/core';
import { student } from '../classes/interfaces/student';
import { teacher } from './interfaces/teacher';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userSvc:UsersService) { }
  
  students:student[] = []
  teachers:teacher[] = []

  ngOnInit(): void {
    this.loadStudents()
    this.loadTeachers()
  }

  loadStudents(){
    this.userSvc.getStudents()
    .subscribe(res =>this.students = res)
  }

  loadTeachers(){
    this.userSvc.getTeachers()
    .subscribe(res => this.teachers = res)
  }
}
