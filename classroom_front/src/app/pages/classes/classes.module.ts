import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesComponent } from './classes.component';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { DetailComponent } from './detail/detail.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    ClassesComponent,
    CardComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule
  ],
  exports:[]
})
export class ClassesModule { }
