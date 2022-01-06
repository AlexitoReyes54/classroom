import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: 'auth', loadChildren: () => import('./pages/authorization/authorization.module').then(m => m.AuthorizationModule) },
 { path: 'home', loadChildren: () => import('./pages/classes/classes.module').then(m => m.ClassesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
