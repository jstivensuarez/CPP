import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Forecast } from './dto/forecast';
import { GenericForecast } from './dto/generic-forecast';

const FORECAST: Forecast[] = [
  { id: 1, countryFlag: 'COL', countryCode: 'Colombia', subjects: 1, sites: 4, source: 'Actual', companyMedian: 1052254, median: 1227060, high: 1740000, scSource: 'Actual', scCompanyMedian: 111111, scMedian: 44444, scHigh: 7777 },
  { id: 2, countryFlag: 'ARG', countryCode: 'Argentina', subjects: 2, sites: 5, source: 'Modeled', companyMedian: 89109, median: 105816, high: 144802, scSource: 'Actual', scCompanyMedian: 22222, scMedian: 55555, scHigh: 8888 },
  { id: 3, countryFlag: 'US', countryCode: 'United States', subjects: 3, sites: 6, source: 'Actual', companyMedian: 17000, median: 20000, high: 27000, scSource: 'Modeled', scCompanyMedian: 33333, scMedian: 66666, scHigh: 9999 },
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
    this.costPerPatientforecast = FORECAST.map(f =>({
        id: f.id,
        countryFlag: f.countryFlag,
        countryCode: f.countryCode,
        quantity: f.subjects,
        source: f.source,
        companyMedian: f.companyMedian,
        median: f.median,
        high: f.high,
    }));

    this.siteCostforecast = FORECAST.map(f => ({   
        id: f.id,
        countryFlag: f.countryFlag,
        countryCode: f.countryCode,
        quantity: f.sites,
        source: f.scSource,
        companyMedian: f.scCompanyMedian,
        median: f.scMedian,
        high: f.scHigh,    
    }));
  }
}
