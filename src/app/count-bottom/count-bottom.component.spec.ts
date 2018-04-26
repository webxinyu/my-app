import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountBottomComponent } from './count-bottom.component';

describe('CountBottomComponent', () => {
  let component: CountBottomComponent;
  let fixture: ComponentFixture<CountBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
