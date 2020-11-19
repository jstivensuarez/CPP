import { Component, Input, OnInit } from '@angular/core';
import { GenericForecast } from '../../cpp-tool/dto/generic-forecast';

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
  @Input() forecast: GenericForecast[];
  
  constructor() { }
  ngOnInit(): void {
  }

}
