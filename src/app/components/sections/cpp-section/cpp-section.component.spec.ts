import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CppSectionComponent } from './cpp-section.component';

describe('CppDataComponent', () => {
  let component: CppSectionComponent;
  let fixture: ComponentFixture<CppSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CppSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CppSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
