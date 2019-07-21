import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftRightMenuComponent } from './left-right-menu.component';

describe('LeftMenuComponent', () => {
  let component: LeftRightMenuComponent;
  let fixture: ComponentFixture<LeftRightMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeftRightMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftRightMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
