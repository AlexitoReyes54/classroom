import { Component, OnInit } from '@angular/core';
import { Iclass } from '../classes/interfaces/Iclass';
import { student } from '../classes/interfaces/student';
import { teacher } from './interfaces/teacher';
import { ClassesService } from './services/classes.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userSvc:UsersService,private classesSvc:ClassesService) { }
  
  students:student[] = []
  teachers:teacher[] = []
  classes:Iclass[] = []

  ngOnInit(): void {
    this.loadStudents()
    this.loadTeachers()
    this.loadClasses()
  }

  loadStudents(){
    this.userSvc.getStudents()
    .subscribe(res =>this.students = res)
  }

  loadTeachers(){
    this.userSvc.getTeachers()
    .subscribe(res => this.teachers = res)
  }

  loadClasses(){
    this.classesSvc.getAllClasses()
    .subscribe(res => this.classes = res)
  }
}
