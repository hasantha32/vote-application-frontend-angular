import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteSummaryComponent } from './vote-summary.component';

describe('VoteSummaryComponent', () => {
  let component: VoteSummaryComponent;
  let fixture: ComponentFixture<VoteSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
