import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteProfileComponent } from './vote-profile.component';

describe('VoteProfileComponent', () => {
  let component: VoteProfileComponent;
  let fixture: ComponentFixture<VoteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoteProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
