import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes.component';
import { ClassesGuard } from './classes.guard';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [{ path: '', component: ClassesComponent,canActivate:[ClassesGuard] },
{ path: 'detail/:classId', component:DetailComponent,canActivate:[ClassesGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
