import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPortComponent } from './list-port.component';

describe('ListPortComponent', () => {
  let component: ListPortComponent;
  let fixture: ComponentFixture<ListPortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
