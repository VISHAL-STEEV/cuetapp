import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { NavComComponent } from './login/nav-com/nav-com.component';
import { HomeComponent } from './login/home/home.component';
import { LoginComComponent } from './login/login-com/login-com.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth/auth.component';
import { AuthchildComponent } from './authchild/authchild.component';
import { SalesComponent } from './sales/sales.component';


const routes: Routes = [
  { path: '', redirectTo:'login' ,pathMatch: 'full'},
  { path: 'signUp', component: SignUpComponent},
  {path:'nav',component:NavComComponent},
  {path:'home', component:HomeComponent,canActivate:[AuthGuard]},
  {path:'login', component:LoginComComponent},{path:'auth', component:AuthComponent,children:[
    { path:'authchild',component: AuthchildComponent}]},{path:'sales',component:SalesComponent}
   


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
