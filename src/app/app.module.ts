import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { NavComComponent } from './login/nav-com/nav-com.component';
import { HomeComponent } from './login/home/home.component';
import { NextDirective } from './directive/next.directive';
import { PrevDirective } from './directive/prev.directive';
import { LoginComComponent } from './login/login-com/login-com.component';
import { Prev2Directive } from './directive/prev2.directive';
import { Next2Directive } from './directive/next2.directive';
import { SubDirNextDirective } from './directive/sub-dir-next.directive';
import { SubDirPrevDirective } from './directive/sub-dir-prev.directive';
import { ReactiveFormsModule } from '@angular/forms';
import{HTTP_INTERCEPTORS, HttpClientModule}from '@angular/common/http';
import{ MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './login/popup/popup.component';
import { CPCom1Component } from './ConfirmPurchas/cp-com1/cp-com1.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AuthModule } from './auth/auth.module';
import { AuthchildComponent } from './authchild/authchild.component';
import { ErrorInterceptor } from './core/interceptors/core/interceptors/error.interceptor';
import { SalesComponent } from './sales/sales.component';
import {FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    NavComComponent,
    HomeComponent,
    NextDirective,
    PrevDirective,
    LoginComComponent,
    Prev2Directive,
    Next2Directive,
    SubDirNextDirective,
    SubDirPrevDirective,
    PopupComponent,
    CPCom1Component,
    AuthchildComponent,
    SalesComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule,
    MatDialogModule,
    AuthModule,
    MatTabsModule,
    MatSidenavModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


