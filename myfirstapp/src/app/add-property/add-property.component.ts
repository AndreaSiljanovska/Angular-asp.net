import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onBack() 
  {
  
    this.router.navigate(['/']);
  }

  onSubmit(Form:NgForm)
  {
    console.log('Congrats! You submited.')
    console.log(Form)
  }

}
