import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CredentialStorageService } from 'src/app/credential-storage.service';
import { student } from '../interfaces/student';
import { RestClassesService } from '../services/rest-classes.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';


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
    private credentialStorageSvc:CredentialStorageService ) { }
  ngOnInit(): void {
    this.verifyIfTeacher()
    this.restClasses.getOneClassById(this.clasId)
    .subscribe(res =>{
      console.log(res.name);
      this.setValues(res.name)
    }
    )
    
  }
  className!:string;
  isATeacher:boolean = false;
  clasId:string = this.activeRoute.snapshot.params['classId'];

  setValues(className:string){
    this.className = className;
  }

  verifyIfTeacher(){
    if (this.credentialStorageSvc.getCredentials().roleId == 1) {
      this.isATeacher = true;
      this.getStudents()
    }
  }

  getStudents(){ 
    this.restClasses.getOneClassStudents(this.clasId)
    .subscribe(res => this.listOFStudents = res)
  }

  openDialog(){
    const dialogRef = this.dialog.open(DetailComponent, {
      width: '250px'
    });
  }

  displayedColumns: string[] = ['studentId', 'name'];
  listOFStudents:student[] = [];

}
