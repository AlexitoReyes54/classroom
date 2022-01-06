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
    this.restClasses.getStudentClasses(this.credentialStorageSvc.getCredentials().id)
    .subscribe(res=> this.classes = res
    )
    console.log(this.classes);
    
  }
  name = ""

  classes!:classCard[];
  
  loadCards(classes:classCard[]){

  }
 
}
