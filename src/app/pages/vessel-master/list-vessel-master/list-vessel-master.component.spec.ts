import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVesselMasterComponent } from './list-vessel-master.component';

describe('ListVesselMasterComponent', () => {
  let component: ListVesselMasterComponent;
  let fixture: ComponentFixture<ListVesselMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVesselMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVesselMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
