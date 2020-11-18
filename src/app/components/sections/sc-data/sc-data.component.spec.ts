import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScDataComponent } from './sc-data.component';

describe('ScDataComponent', () => {
  let component: ScDataComponent;
  let fixture: ComponentFixture<ScDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
