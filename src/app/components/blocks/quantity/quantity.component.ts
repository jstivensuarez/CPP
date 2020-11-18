import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Forecast } from '../../cpp-tool/dto/forecast';


@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {

  displayedColumns: string[] = ['subjects', 'source'];
  @Input() forecast: FormArray;
  @Input() forecastForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
}
