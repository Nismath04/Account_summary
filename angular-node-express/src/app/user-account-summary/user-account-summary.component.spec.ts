import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserAccountSummaryComponent } from './user-account-summary.component';
import { UserAccountService } from '../config/user-account.service';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule as NgRxStoreModule } from '@ngrx/store';
describe('UserAccountSummaryComponent', () => {
  let component: UserAccountSummaryComponent;
  let fixture: ComponentFixture<UserAccountSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountSummaryComponent],
      imports:[HttpClientTestingModule,HttpClientModule,MatDialogModule],
        providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},provideMockStore({})
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAccountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it('should be created', () => {
    expect(component).toBeTruthy();

   });
});
function provideMockStore(arg0: {}): any {
  throw new Error('Function not implemented.');
}

