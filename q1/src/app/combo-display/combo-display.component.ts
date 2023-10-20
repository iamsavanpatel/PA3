import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo-display',
  templateUrl: './combo-display.component.html',
  styleUrls: ['./combo-display.component.css']
})
export class ComboDisplayComponent implements OnInit {
  dataArray: string[] = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];
  selectedItem: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
