import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommudityComponent } from './list-commudity.component';

describe('ListCommudityComponent', () => {
  let component: ListCommudityComponent;
  let fixture: ComponentFixture<ListCommudityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCommudityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommudityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
