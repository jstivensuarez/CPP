import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { GenericForecast } from '../../cpp-tool/dto/generic-forecast';

@Component({
  selector: 'app-cpp-section',
  templateUrl: './cpp-section.component.html',
  styleUrls: ['./cpp-section.component.css', './cpp-section.component.css']
})
export class CppSectionComponent implements OnInit {

  @Input() forecast: GenericForecast[];
  @Input() title: string;
  @Input() quantityColumnTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

  get cppTotals(){
    return this.forecast.map(f => (
      {
        companyMedian: f.companyMedian,
        median: f.median,
        high: f.high
      }
    ))
  }

  get totals(){
    return this.forecast.map(f => (
      {
        companyMedian: f.companyMedian * f.quantity,
        median: f.median * f.quantity,
        high: f.high * f.quantity
      }
    ))
  }
}
