import { Component, OnInit } from '@angular/core';
import { HousingService } from '../services/housing.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties : any;
  constructor(private housingService:HousingService, private route:ActivatedRoute) { }

  ngOnInit() : void  {

    this.housingService.getAllProperties().subscribe(data=>this.properties=data);
    
  }

}
