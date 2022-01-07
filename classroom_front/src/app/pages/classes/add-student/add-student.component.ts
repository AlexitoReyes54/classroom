import { Component, OnInit ,Inject} from '@angular/core';
import { student } from '../interfaces/student';
import { RestClassesService } from '../services/rest-classes.service';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import { dialogbridge } from '../interfaces/dialogbridge';
import { rollInClass } from '../interfaces/rollInClass';
import { FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']

})
export class AddStudentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData:dialogbridge,
    private restClasses:RestClassesService,
    public dialog: MatDialog,) { }
  

  students:student[] = [];
  selectedValue: number = 0;
  

  ngOnInit(): void {
    this.loadstudents()
    this.students = this.dialogData.students
    
  }
  
  loadstudents(){
    this.restClasses.getNotInClassStudets(this.dialogData.classId)
    .subscribe(res => {
      this.students = res})
  }
  
  rollStudent(){
    
    let dataForInscription:rollInClass = {
      studentId:this.selectedValue,
      classId:this.dialogData.classId
    }
  
    this.restClasses.addStudentToAClass(dataForInscription)
    .subscribe(res => {})
  }

}
