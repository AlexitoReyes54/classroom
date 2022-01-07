import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ManagementComponent } from './management/management.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { TeacherListItemComponent } from './teacher-list-item/teacher-list-item.component';
import { StudentListItemComponent } from './student-list-item/student-list-item.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ClassFormComponent } from './class-form/class-form.component';
import { ClassListItemComponent } from './class-list-item/class-list-item.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AdminComponent,
    ManagementComponent,
    UserListItemComponent,
    TeacherListItemComponent,
    StudentListItemComponent,
    UserFormComponent,
    ClassFormComponent,
    ClassListItemComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule
    
  ]
})
export class AdminModule { }
