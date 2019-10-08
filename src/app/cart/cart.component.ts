import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Books } from '../data.modal';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartt: Books[]=[];
cost: number = 0;
  constructor(private svc: DataService) { }

  ngOnInit() {
 this.cartt = this.svc.cart;
 this.cartt.forEach(element => {
  this.cost = this.cost + parseInt(element.price);
 });
  }
remv(i){
  this.cost = this.cost - parseInt(this.cartt[i].price);
  this.svc.cart.splice(i,1);
}
}
