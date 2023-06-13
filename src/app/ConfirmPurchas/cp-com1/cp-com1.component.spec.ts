import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPCom1Component } from './cp-com1.component';

describe('CPCom1Component', () => {
  let component: CPCom1Component;
  let fixture: ComponentFixture<CPCom1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPCom1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CPCom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
