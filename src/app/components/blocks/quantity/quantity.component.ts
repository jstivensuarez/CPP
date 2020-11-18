import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {

  displayedColumns: string[] = ['subjects', 'source'];
  @Input() forecast: FormArray;
  @Input() forecastForm: FormGroup;
  @Input() isSiteCost: Boolean;
  constructor() { }

  ngOnInit(): void {
  }

  get title() {
    return `Number of ${this.isSiteCost ? "Sites" : "Subjects"}`
  }

  get formControlName(){
    return this.isSiteCost ? "sites" : "subjects"
  }
}
