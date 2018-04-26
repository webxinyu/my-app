import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourClassifyComponent } from './four-classify.component';

describe('FourClassifyComponent', () => {
  let component: FourClassifyComponent;
  let fixture: ComponentFixture<FourClassifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourClassifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourClassifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
