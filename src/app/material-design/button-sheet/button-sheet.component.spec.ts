import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSheetComponent } from './button-sheet.component';

describe('ButtonSheetComponent', () => {
  let component: ButtonSheetComponent;
  let fixture: ComponentFixture<ButtonSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonSheetComponent]
    });
    fixture = TestBed.createComponent(ButtonSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
