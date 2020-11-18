import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Forecast } from '../../cpp-tool/dto/forecast';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.css']
})
export class TotalsComponent implements OnInit {

  @Input() forecast: FormArray;
  
  constructor() { }

  ngOnInit(): void {
  }

}
