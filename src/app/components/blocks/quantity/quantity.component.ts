import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { GenericForecast } from '../../cpp-tool/dto/generic-forecast';


@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {

  displayedColumns: string[] = ['subjects', 'source'];
  @Input() forecast: GenericForecast[];
  @Input() columnTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

  onQuantityChange(code: string, event: any){
    const forecastReference = this.forecast.find(f => f.code == code);
    forecastReference.number = event.target.value;
  }
}
