import { Component, OnInit } from '@angular/core';
import { Books } from '../data.modal';
import { DataService } from '../data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  books: Books[]=[];
  constructor(private svc: DataService) { }

  ngOnInit() {
    this.books= this.svc.book;
  }

}
