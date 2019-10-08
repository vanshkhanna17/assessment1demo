import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Books } from '../data.modal';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  book: Books;
  bookId: number;
  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.bookId =parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.book.forEach(element => {
      if(element.id==this.bookId){
        this.book=element;
      }
    });
  }
 add(){
   this.svc.cart.push(this.svc.book[this.bookId]);
   console.log(this.svc.cart);
 }
}
