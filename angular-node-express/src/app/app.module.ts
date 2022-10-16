import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAccountSummaryComponent } from './user-account-summary/user-account-summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';  
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component'
import { AngularIbanModule } from 'angular-iban';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialExampleModule } from 'src/material.module';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { StoreModule } from '@ngrx/store';
import { TransactionReducer } from './store/reducers/transactions.reducer';

@NgModule({
  declarations: [
    AppComponent,
    UserAccountSummaryComponent,
    DialogComponent,
    DeleteDialogComponent  ],
    entryComponents:[DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    AngularIbanModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    StoreModule.forRoot({
      transactions: TransactionReducer,
    }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
