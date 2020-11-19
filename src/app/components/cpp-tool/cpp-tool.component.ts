import { Component, OnInit } from '@angular/core';
import { Forecast } from './dto/forecast';
import { GenericForecast } from './dto/generic-forecast';

const CPP_FORECAST_DATA: Forecast[] = [
  { flag: 'COL', code: 'COL', exchangeRate: 0, name: 'Colombia', number: 1, source: 'Actual', modeled: null, actual: {  companyMedian: 1052254, median: 1227060, high: 1740000 }},
  { flag: 'ARG', code: 'ARG', exchangeRate: 0, name: 'Argentina', number: 2, source: 'Modeled', actual: null, modeled: {  companyMedian: 1052254, median: 1227060, high: 1740000 }},
  { flag: 'US',  code: 'US',  exchangeRate: 0, name: 'United States', number: 3, source: 'Actual', modeled: null, actual: {  companyMedian: 1052254, median: 1227060, high: 1740000 }}
];

const SITECOST_FORECAST_DATA: Forecast[] = [
  { flag: 'COL', code: 'COL', exchangeRate: 0, name: 'Colombia', number: 6, source: 'Modeled', actual: null, modeled: {  companyMedian: 100000, median: 40000, high: 70000 }},
  { flag: 'ARG', code: 'ARG', exchangeRate: 0, name: 'Argentina', number: 4, source: 'Actual', modeled: null, actual: {  companyMedian: 2000, median: 50000, high: 80000 }},
  { flag: 'US',  code: 'US',  exchangeRate: 0, name: 'United States', number: 5, source: 'Modeled', actual: null, modeled: {  companyMedian: 30000, median: 60000, high: 9000 }}
];


@Component({
  selector: 'app-cpp-tool',
  templateUrl: './cpp-tool.component.html',
  styleUrls: ['./cpp-tool.component.css']
})
export class CppToolComponent implements OnInit {

  costPerPatientTitle: string;
  siteCostTitle: string;
  costPerPatientforecast: GenericForecast[];
  siteCostforecast: GenericForecast[];

  constructor() { }

  ngOnInit(): void {
    this.costPerPatientTitle = 'Cost per patient data';
    this.siteCostTitle = 'Site cost data';
    this.getForecast();
  }

  getForecast() {
    this.costPerPatientforecast = CPP_FORECAST_DATA.map(f => this.setGenericForecast(f));

    this.siteCostforecast = SITECOST_FORECAST_DATA.map(f => this.setGenericForecast(f));
  }

  setGenericForecast (f: Forecast) {
    let sourceBenchmark = f.source.toLocaleLowerCase() === "modeled" ? f.modeled : f.actual;  
      return { 
        flag: f.flag,
        code: f.code,
        number: f.number,
        source: f.source,
        companyMedian: sourceBenchmark.companyMedian,
        median: sourceBenchmark.median,
        high: sourceBenchmark.high,    
      }
  }
}
