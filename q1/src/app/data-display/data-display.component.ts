import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  integerData: number = 58;
  stringData: string = 'Savan patel';
  dateData: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }
}
