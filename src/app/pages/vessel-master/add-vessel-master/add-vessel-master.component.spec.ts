import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVesselMasterComponent } from './add-vessel-master.component';

describe('AddVesselMasterComponent', () => {
  let component: AddVesselMasterComponent;
  let fixture: ComponentFixture<AddVesselMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVesselMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVesselMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
