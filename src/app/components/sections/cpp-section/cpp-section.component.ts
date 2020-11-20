import { Component, Input, OnInit } from '@angular/core';
import { GenericForecast } from '../../cpp-tool/dto/generic-forecast';

@Component({
  selector: 'app-cpp-section',
  templateUrl: './cpp-section.component.html',
  styleUrls: ['./cpp-section.component.css', './cpp-section.component.css']
})
export class CppSectionComponent implements OnInit {

  @Input() forecast: GenericForecast[];
  @Input() title: string;
  @Input() numberColumnTitle: string;

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
        companyMedian: f.companyMedian * f.number,
        median: f.median * f.number,
        high: f.high * f.number
      }
    ))
  }
}
