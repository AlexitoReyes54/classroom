import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
 { path: 'auth', loadChildren: () => import('./pages/authorization/authorization.module').then(m => m.AuthorizationModule) },
 { path: 'home', loadChildren: () => import('./pages/classes/classes.module').then(m => m.ClassesModule) },
 { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
 { path: '**', redirectTo:'auth'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
