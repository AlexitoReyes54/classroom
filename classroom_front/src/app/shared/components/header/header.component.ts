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


  ngOnInit(): void {
  }

  singOut(){
    this.credentialStorageSvc.clearCredentials();
    this.router.navigate(['/','auth'])
  }

}
