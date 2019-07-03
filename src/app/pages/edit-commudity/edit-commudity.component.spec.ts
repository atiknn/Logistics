import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommudityComponent } from './edit-commudity.component';

describe('EditCommudityComponent', () => {
  let component: EditCommudityComponent;
  let fixture: ComponentFixture<EditCommudityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCommudityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCommudityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
