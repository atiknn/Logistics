import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommudityComponent } from './add-commudity.component';

describe('AddCommudityComponent', () => {
  let component: AddCommudityComponent;
  let fixture: ComponentFixture<AddCommudityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCommudityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommudityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
