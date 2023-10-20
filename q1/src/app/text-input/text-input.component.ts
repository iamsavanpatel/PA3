import { Component } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  selectedInputType: string = 'textbox'; // Default selection is "Text Box"
  textInput: string = '';
  textAreaInput: string = '';

  constructor() {}
}
