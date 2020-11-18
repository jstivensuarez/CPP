import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Forecast } from './dto/forecast';

const FORECAST: Forecast[] = [
  { countryFlag: 'COL', countryCode: 'Colombia', subjects: 1, sites: 1, source: 'Actual', companyMedian: 1052254, median: 1227060, high: 1740000, scSource: 'Actual', scCompanyMedian: 111111, scMedian: 44444, scHigh: 7777 },
  { countryFlag: 'ARG', countryCode: 'Argentina', subjects: 2, sites: 2, source: 'Modeled', companyMedian: 89109, median: 105816, high: 144802, scSource: 'Actual', scCompanyMedian: 22222, scMedian: 55555, scHigh: 8888 },
  { countryFlag: 'US', countryCode: 'United States', subjects: 3, sites: 3, source: 'Actual', companyMedian: 17000, median: 20000, high: 27000, scSource: 'Modeled', scCompanyMedian: 33333, scMedian: 66666, scHigh: 9999 },
];

@Component({
  selector: 'app-cpp-tool',
  templateUrl: './cpp-tool.component.html',
  styleUrls: ['./cpp-tool.component.css']
})
export class CppToolComponent implements OnInit {

  forecastForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.initForecastFormArray();
  }

  initForecastFormArray() {
    FORECAST.forEach(f => {
      let forecastForm = new FormGroup({
        countryFlag: new FormControl(f.countryFlag),
        countryCode: new FormControl(f.countryCode),
        subjects: new FormControl(f.subjects),
        sites: new FormControl(f.sites),
        source: new FormControl(f.source),
        companyMedian: new FormControl(f.companyMedian),
        median: new FormControl(f.median),
        high: new FormControl(f.high),
        scSource: new FormControl(f.scSource),
        scCompanyMedian: new FormControl(f.scCompanyMedian),
        scMedian: new FormControl(f.scMedian),
        scHigh: new FormControl(f.scHigh),
      });

      this.forecast.push(forecastForm);
    });
  }

  createForm(): void {
    this.forecastForm = this.fb.group({
      forecastFormArray: this.fb.array([])
    })
  }

  get forecast(): FormArray {
    return this.forecastForm.get('forecastFormArray') as FormArray;
  }
}
