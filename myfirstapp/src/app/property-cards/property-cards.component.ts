import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-cards',
  templateUrl: './property-cards.component.html',
  styleUrls: ['./property-cards.component.css']
})
export class PropertyCardsComponent implements OnInit {
 @Input () Property : any

  constructor() { }

  ngOnInit() {
  }

}
