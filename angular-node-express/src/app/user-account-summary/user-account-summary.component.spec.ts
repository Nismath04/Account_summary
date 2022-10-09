import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountSummaryComponent } from './user-account-summary.component';
describe('UserAccountSummaryComponent', () => {
  let component: UserAccountSummaryComponent;
  let fixture: ComponentFixture<UserAccountSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAccountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
