import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  styleUrls:['contact.css'],
  templateUrl: 'contact.html'
  
  
})
export class ContactPage {


public VP: number;
public LT: number; 
public DP: number;
public DA: number;
public LA: number;
public TI: number;
public MA: number;
public DPA: number
  
  constructor(public navCtrl: NavController) {
  }
    compute(){
  this.DPA= this.VP*this.DP/100;
  this.LA= this.VP-this.DPA;
  this.TI= this.LA* 0.3026/100;
  this.MA= (parseInt(this.LA) + parseInt(this.TI))/this.LT;


  

  }

}
