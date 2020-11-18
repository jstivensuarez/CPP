import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppDataComponent } from './cpp-data.component';

describe('CppDataComponent', () => {
  let component: CppDataComponent;
  let fixture: ComponentFixture<CppDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CppDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CppDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
