import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  videoFileName:string;
  videoFileName1 : string= "assets/video/1.MP4";
  videoFileName2 : string= "assets/video/2.MP4";
  videoFileName3 : string= "assets/video/5.MP4";
  videoFileName4 : string= "assets/video/4.MP4";

  constructor(public navCtrl: NavController) {
    this.videoFileName = this.videoFileName1;
  }
  videoPlayerFirst(){
    this.videoFileName = this.videoFileName1;
  }

  videoPlayerSecond(){
    this.videoFileName = this.videoFileName2;
    console.log("Hello");
  }
  videoPlayerThird(){
    this.videoFileName = this.videoFileName3;
    console.log("Hello");
  }
  videoPlayerFourth(){
    this.videoFileName = this.videoFileName4;
    console.log("Hello");
  }
}
