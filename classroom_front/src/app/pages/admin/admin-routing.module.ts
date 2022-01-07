import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminGuard } from './admin.guard';
import { ClassFormComponent } from './class-form/class-form.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: 'user', component: UserFormComponent ,canActivate:[AdminGuard]},
  { path: 'user/:id', component: UserFormComponent,canActivate:[AdminGuard] },
  { path: 'class', component: ClassFormComponent,canActivate:[AdminGuard] },
  { path: '', component: AdminComponent ,canActivate:[AdminGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
