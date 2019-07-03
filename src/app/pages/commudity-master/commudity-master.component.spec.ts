import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommudityMasterComponent } from './commudity-master.component';

describe('CommudityMasterComponent', () => {
  let component: CommudityMasterComponent;
  let fixture: ComponentFixture<CommudityMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommudityMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommudityMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
