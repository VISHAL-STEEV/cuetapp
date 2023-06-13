import { Component,AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatPaginator,PageEvent  } from '@angular/material/paginator';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit  {

p:number =1;
itemperpage:number=3;

inputsearchdata:any;


public cartData !: any [''];
public cartDataTwo !: any [''];

 
constructor(private api : ApiServiceService){}



ngOnInit(): void {
 this.api.flipcartData().subscribe((res:any)=>{
   this.cartData = res;
   this.cartDataTwo=res;
 })
 

}






ascending(){
  this.cartDataTwo = this.cartDataTwo.sort((priceac:any,pricedc:any)=>{
    return pricedc.price - priceac.price
  });

}

descending(){
  this.cartDataTwo = this.cartDataTwo.sort((priceac:any,pricedc:any)=>{
    return priceac.price - pricedc.price
  });

}
  

filter(category : string){
  this.cartDataTwo=this.cartData.filter((data:any)=>{
   if(data.category==category || category==""){
    return data
   }
  })
}


Addtocart(obj:any){
   
this.api.addtocart(obj);
   
}


}
