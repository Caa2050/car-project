import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSpecsComponent } from './car-specs.component';

describe('CarSpecsComponent', () => {
  let component: CarSpecsComponent;
  let fixture: ComponentFixture<CarSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSpecsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
