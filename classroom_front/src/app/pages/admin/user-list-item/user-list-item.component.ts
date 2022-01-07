import { Component, Input, OnInit } from '@angular/core';
import { student } from '../../classes/interfaces/student';
import { teacher } from '../interfaces/teacher';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  constructor() { }
  
  @Input()
  data!:teacher | student;

  ngOnInit(): void {
    console.log(this.data);
    
  }

  
}
