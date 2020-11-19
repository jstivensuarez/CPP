import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { GenericForecast } from '../../cpp-tool/dto/generic-forecast';

@Component({
  selector: 'app-cpp-total',
  templateUrl: './cpp-total.component.html',
  styleUrls: ['./cpp-total.component.css']
})
export class CppTotalComponent implements OnInit {
  @Input() forecast: GenericForecast[];
  
  constructor() { }

  ngOnInit(): void {
  }
}