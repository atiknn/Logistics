import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillofLeadingComponent } from './billof-leading.component';

describe('BillofLeadingComponent', () => {
  let component: BillofLeadingComponent;
  let fixture: ComponentFixture<BillofLeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillofLeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillofLeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
