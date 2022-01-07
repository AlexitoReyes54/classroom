import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ManagementComponent } from './management/management.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { UserListItemComponent } from './user-list-item/user-list-item.component';


@NgModule({
  declarations: [
    AdminComponent,
    ManagementComponent,
    UserListItemComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    MatButtonModule
  ]
})
export class AdminModule { }
