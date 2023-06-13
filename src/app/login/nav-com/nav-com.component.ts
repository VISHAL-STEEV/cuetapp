import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-com',
  templateUrl: './nav-com.component.html',
  styleUrls: ['./nav-com.component.css']
})
export class NavComComponent {

  menuVariable:boolean =false;
  menu_icon_variable:boolean = false;
  openMenu(){
   this.menuVariable =! this.menuVariable;
   this.menu_icon_variable=!this.menu_icon_variable;
  }

}
  