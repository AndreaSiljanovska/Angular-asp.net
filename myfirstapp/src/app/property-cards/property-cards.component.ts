import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-cards',
  templateUrl: './property-cards.component.html',
  styleUrls: ['./property-cards.component.css']
})
export class PropertyCardsComponent implements OnInit {
 
  Property : any = {
    "ID" : 1,
    "type" : "House",
    "name" :"Brila House",
    "price" : 12000
  }
  constructor() { }

  ngOnInit() {
  }

}
