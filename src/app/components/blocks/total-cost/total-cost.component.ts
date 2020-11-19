import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { GenericForecast } from '../../cpp-tool/dto/generic-forecast';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.css']
})
export class TotalCostComponent implements OnInit {
  
  @Input() forecast: GenericForecast[];

  constructor() { }

  ngOnInit(): void {
  }
}
