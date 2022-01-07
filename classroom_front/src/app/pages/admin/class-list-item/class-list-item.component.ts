import { Component, Input, OnInit } from '@angular/core';
import { Iclass } from '../../classes/interfaces/Iclass';

@Component({
  selector: 'app-class-list-item',
  templateUrl: './class-list-item.component.html',
  styleUrls: ['./class-list-item.component.css']
})
export class ClassListItemComponent implements OnInit {

  constructor() { }
  
  @Input()
  data!:Iclass;

  ngOnInit(): void {
  }

}
