import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotifyPartyComponent } from './add-notify-party.component';

describe('AddNotifyPartyComponent', () => {
  let component: AddNotifyPartyComponent;
  let fixture: ComponentFixture<AddNotifyPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNotifyPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotifyPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
