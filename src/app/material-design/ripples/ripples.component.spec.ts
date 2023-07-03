import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RipplesComponent } from './ripples.component';

describe('RipplesComponent', () => {
  let component: RipplesComponent;
  let fixture: ComponentFixture<RipplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RipplesComponent]
    });
    fixture = TestBed.createComponent(RipplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
