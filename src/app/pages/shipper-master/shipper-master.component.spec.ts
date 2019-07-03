import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperMasterComponent } from './shipper-master.component';

describe('ShipperMasterComponent', () => {
  let component: ShipperMasterComponent;
  let fixture: ComponentFixture<ShipperMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipperMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipperMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
