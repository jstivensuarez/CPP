import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sc-data',
  templateUrl: './sc-data.component.html',
  styleUrls: ['./sc-data.component.css']
})
export class ScDataComponent implements OnInit {

  @Input() forecast: FormArray;
  @Input() forecastForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
