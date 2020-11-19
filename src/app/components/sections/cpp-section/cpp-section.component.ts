import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { GenericForecast } from '../../cpp-tool/dto/generic-forecast';

@Component({
  selector: 'app-cpp-section',
  templateUrl: './cpp-section.component.html',
  styleUrls: ['./cpp-section.component.css']
})
export class CppSectionComponent implements OnInit {

  @Input() forecast: GenericForecast[];
  @Input() title: string;
  @Input() quantityColumnTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
