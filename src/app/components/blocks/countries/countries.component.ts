import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Forecast } from '../../cpp-tool/dto/forecast';

export interface Country {
  flag: string,
  code: string
}

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  displayedColumns: string[] = ['flag', 'code'];
  @Input() forecast: FormArray;
  @Input() forecastForm: FormGroup;
  
  constructor() { }
  ngOnInit(): void {
  }

}
