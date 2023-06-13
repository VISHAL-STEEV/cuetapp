import { Component, OnInit } from '@angular/core';
import{ MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { CPCom1Component } from 'src/app/ConfirmPurchas/cp-com1/cp-com1.component';
import { ApiServiceService } from 'src/app/service/api-service.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subject :any =[''];
  offer:any = [''];
  Courses :any [''];



constructor (private dialoRef : MatDialog,private api :ApiServiceService){}




ngOnInit(): void {
  
  this.api.homedata().subscribe((res)=>{this.Courses =res; })
  this.api.homedataone().subscribe((res)=>{this.offer =res})
  this.api.homedataTwo().subscribe((res)=>{this.subject = res})

}




opendialog(videoId :any){
  const dialogRef = this.dialoRef.open(PopupComponent);
  dialogRef.componentInstance.videoId = videoId;
 
}




cp_but1(){
  this.dialoRef.open(CPCom1Component)
}





}
  


