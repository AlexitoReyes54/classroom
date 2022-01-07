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
import {MatIconModule} from '@angular/material/icon';
import { AppModule } from 'src/app/app.module';
import {MatDialogModule} from '@angular/material/dialog';
import { AddStudentComponent } from './add-student/add-student.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClassesComponent,
    CardComponent,
    DetailComponent,
    AddStudentComponent,
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule
    
  ],
  exports:[]
})
export class ClassesModule { }
