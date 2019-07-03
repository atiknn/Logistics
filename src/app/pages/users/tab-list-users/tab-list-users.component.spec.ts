import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabListUsersComponent } from './tab-list-users.component';

describe('TabListUsersComponent', () => {
  let component: TabListUsersComponent;
  let fixture: ComponentFixture<TabListUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabListUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
