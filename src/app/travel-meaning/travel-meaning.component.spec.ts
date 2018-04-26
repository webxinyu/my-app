import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelMeaningComponent } from './travel-meaning.component';

describe('TravelMeaningComponent', () => {
  let component: TravelMeaningComponent;
  let fixture: ComponentFixture<TravelMeaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelMeaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelMeaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
