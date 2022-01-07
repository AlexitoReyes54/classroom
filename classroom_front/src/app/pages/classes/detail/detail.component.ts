import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CredentialStorageService } from 'src/app/credential-storage.service';
import { student } from '../interfaces/student';
import { RestClassesService } from '../services/rest-classes.service';
import {MatDialog, MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import { AddStudentComponent } from '../add-student/add-student.component';
import { dialogbridge } from '../interfaces/dialogbridge';
import { FormControl } from '@angular/forms';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private activeRoute: ActivatedRoute,
    private restClasses:RestClassesService,
    private credentialStorageSvc:CredentialStorageService,
     ) { }
     
  ngOnInit(): void {
    this.dialogbridge.classId = this.clasId;
    this.verifyIfTeacher()
    this.getClassData()
  }

  className!:string;
  isATeacher:boolean = false;
  clasId:string = this.activeRoute.snapshot.params['classId'];
  dialogbridge:dialogbridge = {
    students:[],
    classId:"" 
  }

  setValues(className:string){
    this.className = className;
  }

  getClassData(){
    this.restClasses.getOneClassById(this.clasId)
    .subscribe(res =>{
      this.setValues(res.name)
    })
  }

  verifyIfTeacher(){
    if (this.credentialStorageSvc.getCredentials().roleId == 1) {
      this.isATeacher = true;
      this.getStudents()
    }
  }



  getStudents(){ 
    this.restClasses.getOneClassStudents(this.clasId)
    .subscribe(res => {
      this.listOFStudents = res
      
      this.dialogbridge.students = res;
    })
  }

  openDialog(){
    const dialogRef = this.dialog.open(AddStudentComponent, {
      data:this.dialogbridge,
      width: '450px',
      height:'260px'
    });

    
  }

  displayedColumns: string[] = ['studentId', 'name'];
  listOFStudents:student[] = [];

}

