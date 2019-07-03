import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortMasterComponent } from './port-master.component';

describe('PortMasterComponent', () => {
  let component: PortMasterComponent;
  let fixture: ComponentFixture<PortMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
