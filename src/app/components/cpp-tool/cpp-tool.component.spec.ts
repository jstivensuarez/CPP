import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppToolComponent } from './cpp-tool.component';

describe('CppToolComponent', () => {
  let component: CppToolComponent;
  let fixture: ComponentFixture<CppToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CppToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CppToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
