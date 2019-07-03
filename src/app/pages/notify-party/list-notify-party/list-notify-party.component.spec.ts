import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNotifyPartyComponent } from './list-notify-party.component';

describe('ListNotifyPartyComponent', () => {
  let component: ListNotifyPartyComponent;
  let fixture: ComponentFixture<ListNotifyPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNotifyPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNotifyPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
