import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cpp-total',
  templateUrl: './cpp-total.component.html',
  styleUrls: ['./cpp-total.component.css']
})
export class CppTotalComponent implements OnInit {
  @Input() forecast: FormArray;
  @Input() isSiteCost: Boolean;
  constructor() { }

  ngOnInit(): void {
  }

  getCompanyMedian(control: FormControl): number{
    let value = control.get('companyMedian').value;
    if(this.isSiteCost){
      value = control.get('scCompanyMedian').value;
    }
    return value;
  }

  getMedian(control: FormControl): number{
    let value = control.get('median').value;
    if(this.isSiteCost){
      value = control.get('scMedian').value;
    }
    return value;
  }

  getHigh(control: FormControl): number{
    let value = control.get('high').value;
    if(this.isSiteCost){
      value = control.get('scHigh').value;
    }
    return value;
  }
}