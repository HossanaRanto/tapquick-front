import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorScreenComponent } from './competitor-screen.component';

describe('CompetitorScreenComponent', () => {
  let component: CompetitorScreenComponent;
  let fixture: ComponentFixture<CompetitorScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetitorScreenComponent]
    });
    fixture = TestBed.createComponent(CompetitorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
