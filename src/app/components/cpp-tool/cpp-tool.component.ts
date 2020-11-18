import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Forecast } from './dto/forecast';

const FORECAST: Forecast[] = [
  { countryFlag: 'COL', countryCode: 'Colombia', subjects: 1, sites: 1, source: 'Actual', companyMedian: 1000, median: 1000, high: 1000, scSource: 'Actual', scCompanyMedian: 1000, scMedian: 1000, scHigh: 1000 },
  { countryFlag: 'ARG', countryCode: 'Argentina', subjects: 2, sites: 2, source: 'Modeled', companyMedian: 1000, median: 1000, high: 1000, scSource: 'Actual', scCompanyMedian: 1000, scMedian: 1000, scHigh: 1000 },
  { countryFlag: 'US', countryCode: 'United States', subjects: 3, sites: 3, source: 'Actual', companyMedian: 1000, median: 1000, high: 1000, scSource: 'Modeled', scCompanyMedian: 1000, scMedian: 1000, scHigh: 1000 },
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
