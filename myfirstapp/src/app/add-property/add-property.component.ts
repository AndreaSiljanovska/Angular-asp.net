import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.signUpForm = new FormGroup({
      name: new FormControl(null),
      type: new FormControl(null),
      price: new FormControl(null)
    });
  }

  // tslint:disable-next-line:typedef
  onBack()
  {
    this.router.navigate(['/']);
  }

  // tslint:disable-next-line:typedef
  onSubmit()
  {
    console.log('Congrats! You submited.');
  }

}
