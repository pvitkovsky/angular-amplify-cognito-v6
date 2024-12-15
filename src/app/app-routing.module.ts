import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HelloComponent} from './components/hello/hello.component';
import {AuthGuard} from './service/auth-guard';
import {AuthComponent} from './components/auth/auth.component';

const routes: Routes = [
  {
    path: "",
    component: HelloComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'signin',
    redirectTo : 'auth',
  },
  {
    path: 'signout',
    redirectTo : 'auth',
  },
  {
    path: 'auth',
    component: AuthComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
