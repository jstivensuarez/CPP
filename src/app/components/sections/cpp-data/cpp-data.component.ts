import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Forecast } from '../../cpp-tool/dto/forecast';

@Component({
  selector: 'app-cpp-data',
  templateUrl: './cpp-data.component.html',
  styleUrls: ['./cpp-data.component.css']
})
export class CppDataComponent implements OnInit {

  @Input() forecast: FormArray;
  @Input() forecastForm: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
