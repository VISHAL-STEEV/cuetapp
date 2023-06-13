import { Component, OnInit } from '@angular/core';


declare const YT: any;

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit{

  videoId:any;
  player: any;

  ngOnInit() {
    this.player = new YT.Player('player', {
      height: '455',
      width: '625',
      videoId: this.videoId
    });
    



  }

}


