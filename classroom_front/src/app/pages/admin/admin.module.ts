import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ManagementComponent } from './management/management.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import {MatCardModule} from '@angular/material/card';
import { AppModule } from 'src/app/app.module';
import { TeacherListItemComponent } from './teacher-list-item/teacher-list-item.component';
import { StudentListItemComponent } from './student-list-item/student-list-item.component';

@NgModule({
  declarations: [
    AdminComponent,
    ManagementComponent,
    UserListItemComponent,
    TeacherListItemComponent,
    StudentListItemComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    
  ]
})
export class AdminModule { }
