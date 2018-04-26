import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountForComponent } from './count-for.component';

describe('CountForComponent', () => {
  let component: CountForComponent;
  let fixture: ComponentFixture<CountForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
