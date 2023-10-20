import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input-form',
  templateUrl: './user-input-form.component.html',
  styleUrls: ['./user-input-form.component.css']
})
export class UserInputFormComponent {
  user: any = {}; // Store user details
  submitted: boolean = false;

  constructor() {}

  onSubmit() {
    // Set the submitted flag to true
    this.submitted = true;
  }
}
