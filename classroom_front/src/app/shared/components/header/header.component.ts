import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialStorageService } from 'src/app/credential-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private credentialStorageSvc:CredentialStorageService,) { }

  showAdminManagement:boolean = false;
  showHome:boolean = false;
  showSignOut:boolean = false;

  ngOnInit(): void {
    this.showOptions()
  }
  ngOnChanges(simple:SimpleChanges){

  }
  
  showOptions(){
    let currentRole = this.credentialStorageSvc.getCredentials().roleId

    if (currentRole == 2) {
      this.showAdminManagement = true;
      this.showSignOut = true;
    }else if(currentRole == 1 || currentRole == 2){
      this.showHome = true;
      this.showSignOut = true;
    }
  }

  singOut(){
    this.credentialStorageSvc.clearCredentials();
    this.router.navigate(['/','auth'])
  }

}
