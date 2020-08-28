import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
   
  Properties : Array<any> = [
    {
    "ID" : 1,
    "type" : "House",
    "name" :"Brila House",
    "price" : 12000
  },
  {
    "ID" : 1,
    "type" : "House",
    "name" :"Mallisa House",
    "price" : 13000
  },
  {
    "ID" : 1,
    "type" : "Appartment",
    "name" :"Ocean Apartment",
    "price" : 14000
  },
  {
    "ID" : 1,
    "type" : "Duplex",
    "name" :"Melissa Duplex",
    "price" : 20000
  },
  {
    "ID" : 1,
    "type" : "House",
    "name" :"Naigara House",
    "price" : 12000
  },
  {
    "ID" : 1,
    "type" : "House",
    "name" :"Vintage House",
    "price" : 12000
  }


]

  constructor() { }

  ngOnInit() {
  }

}
