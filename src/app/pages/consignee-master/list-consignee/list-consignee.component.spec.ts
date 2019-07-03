import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsigneeComponent } from './list-consignee.component';

describe('ListConsigneeComponent', () => {
  let component: ListConsigneeComponent;
  let fixture: ComponentFixture<ListConsigneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConsigneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsigneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
