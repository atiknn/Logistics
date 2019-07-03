import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNotifyPartyComponent } from './edit-notify-party.component';

describe('EditNotifyPartyComponent', () => {
  let component: EditNotifyPartyComponent;
  let fixture: ComponentFixture<EditNotifyPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNotifyPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNotifyPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
