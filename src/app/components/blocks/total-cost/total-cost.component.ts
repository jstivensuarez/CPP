import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.css']
})
export class TotalCostComponent implements OnInit {
  @Input() forecast: FormArray;
  @Input() isSiteCost: Boolean;
  constructor() { }

  ngOnInit(): void {
  }

  getTotalCompanyMedian(control: FormControl): number{
    let value = control.get('companyMedian').value * control.get('subjects').value;
    if(this.isSiteCost){
      value = control.get('scCompanyMedian').value * control.get('sites').value;
    }
    return value;
  }

  getTotalMedian(control: FormControl): number{
    let value = control.get('median').value * control.get('subjects').value;
    if(this.isSiteCost){
      value = control.get('scMedian').value * control.get('sites').value;
    }
    return value;
  }

  getTotalHigh(control: FormControl): number{
    let value = control.get('high').value * control.get('subjects').value;
    if(this.isSiteCost){
      value = control.get('scHigh').value * control.get('sites').value;
    }
    return value;
  }
}
