import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ClassFormComponent } from './class-form/class-form.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: 'user', component: UserFormComponent },
  { path: 'user/:id', component: UserFormComponent },
  { path: 'class', component: ClassFormComponent },
  { path: 'class/;classId', component: ClassFormComponent },
  { path: '', component: AdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
