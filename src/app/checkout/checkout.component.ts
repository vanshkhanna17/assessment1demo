import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  name: string = "";
  num: string = "";
  txt: string = "";
  msgn: string;
  msgnu: string;
  msgt: string;
  constructor() { }

  ngOnInit() {
  }
  sub() {
    if (this.name == "") {
      this.msgn = "This field is required!";
    }
    else{
      this.msgn="";
    }
    if (this.num == "") {
      this.msgnu = "This field is required!";
    }
    else{
      this.msgnu="";
    }
    if (this.txt == "") {
      this.msgt = "This field is required!";
    }
    else{
      this.msgt="";
    }
  }
}
