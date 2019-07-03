import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateBlComponent } from './generate-bl.component';

describe('GenerateBlComponent', () => {
  let component: GenerateBlComponent;
  let fixture: ComponentFixture<GenerateBlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateBlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateBlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
