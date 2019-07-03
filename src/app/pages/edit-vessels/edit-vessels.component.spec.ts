import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVesselsComponent } from './edit-vessels.component';

describe('EditVesselsComponent', () => {
  let component: EditVesselsComponent;
  let fixture: ComponentFixture<EditVesselsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVesselsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVesselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
