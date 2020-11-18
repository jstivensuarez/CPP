import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppTotalComponent } from './cpp-total.component';

describe('CppTotalComponent', () => {
  let component: CppTotalComponent;
  let fixture: ComponentFixture<CppTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CppTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CppTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
