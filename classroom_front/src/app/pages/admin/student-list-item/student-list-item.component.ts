import { Component, Input, OnInit } from '@angular/core';
import { student } from '../../classes/interfaces/student';

@Component({
  selector: 'app-student-list-item',
  templateUrl: './student-list-item.component.html',
  styleUrls: ['./student-list-item.component.css']
})
export class StudentListItemComponent implements OnInit {

  constructor() { }

  @Input()
  data!:student;

  ngOnInit(): void {
  }

}
