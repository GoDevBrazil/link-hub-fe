import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./views/register/register.component";
import {LoginComponent} from "./views/login/login.component";
import {PanelComponent} from "./views/panel/panel.component";
import {authGuard} from "./auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'panel', component: PanelComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
