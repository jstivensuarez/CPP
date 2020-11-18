import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Forecast } from '../../cpp-tool/dto/forecast';

@Component({
  selector: 'app-sc-data',
  templateUrl: './sc-data.component.html',
  styleUrls: ['./sc-data.component.css']
})
export class ScDataComponent implements OnInit {

  @Input() forecast: FormArray;
  
  constructor() { }

  ngOnInit(): void {
  }

}
