import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms'
import {searchpipe} from './searchpipe'


@NgModule({
  declarations: [
    
     AuthComponent,searchpipe
  ],
  imports: [
    CommonModule,RouterModule,
    NgxPaginationModule,FormsModule
  ]
})
export class AuthModule { }
