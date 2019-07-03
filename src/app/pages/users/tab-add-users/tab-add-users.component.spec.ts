import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAddUsersComponent } from './tab-add-users.component';

describe('TabAddUsersComponent', () => {
  let component: TabAddUsersComponent;
  let fixture: ComponentFixture<TabAddUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAddUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAddUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
