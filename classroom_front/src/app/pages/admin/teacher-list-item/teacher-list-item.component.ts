import { Component, Input, OnInit } from '@angular/core';
import { teacher } from '../interfaces/teacher';

@Component({
  selector: 'app-teacher-list-item',
  templateUrl: './teacher-list-item.component.html',
  styleUrls: ['./teacher-list-item.component.css']
})
export class TeacherListItemComponent implements OnInit {

  constructor() { }

  @Input()
  data!:teacher;
  
  ngOnInit(): void {
  }

}
