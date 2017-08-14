import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsviewComponent } from './detailsview.component';

describe('DetailsviewComponent', () => {
  let component: DetailsviewComponent;
  let fixture: ComponentFixture<DetailsviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
