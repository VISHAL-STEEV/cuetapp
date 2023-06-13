import { Component,OnInit,ViewChild,ElementRef} from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { ApiServiceService } from '../service/api-service.service';



@Component({
  selector: 'app-authchild',
  templateUrl: './authchild.component.html',
  styleUrls: ['./authchild.component.css']
})
export class AuthchildComponent implements OnInit{




  selectedCart:any=[];
 constructor(private api :ApiServiceService){}


ngOnInit(): void {

this.selectedCart=this.api.cartitem;
console.log(this.selectedCart)

}
 


  goToTab3(tabGroup: MatTabGroup): void {
    tabGroup.selectedIndex = 2; 
  }




}



