import { Component, OnInit } from '@angular/core';
import { CredentialStorageService } from 'src/app/credential-storage.service';
import { classCard } from './interfaces/classCard';
import { RestClassesService } from './services/rest-classes.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor(private credentialStorageSvc:CredentialStorageService,
    private restClasses:RestClassesService) { }

  ngOnInit(): void {
    //this only works if is an student but not for teachers

    this.loadCards()
  }

  classes!:classCard[];

  getStudentClasses(){
    this.restClasses.getStudentClasses(this.credentialStorageSvc.getCredentials().id)
    .subscribe(res=> this.classes = res
    )
  }

  getTeacherClasses(){
    this.restClasses.getTeacherClasses(this.credentialStorageSvc.getCredentials().id)
    .subscribe(res => {
      console.log(res);
      
      this.classes = res})
  }
  
  loadCards(){
    if (this.credentialStorageSvc.getCredentials().roleId ==  1) {
      this.getTeacherClasses()
    }else if((this.credentialStorageSvc.getCredentials().roleId ==  3)){
      this.getStudentClasses()
    }
  }
 
}
