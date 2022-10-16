import { Component, OnInit } from '@angular/core';
import { UserAccountService } from '../config/user-account.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Store } from '@ngrx/store';
import { State } from '../store/models/state.model';
import { AddItemAction } from '../store/actions/transactions.action';
import { Observable } from 'rxjs';
import { TransactionItem } from '../store/models/transactions.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-user-account-summary',
  templateUrl: './user-account-summary.component.html',
  styleUrls: ['./user-account-summary.component.css']
})
export class UserAccountSummaryComponent implements OnInit {
  data:Array<any>=[];
  transactionItems$: Observable<Array<TransactionItem>> | undefined
  dataSource:any;

  constructor(private getData:UserAccountService,public dialog: MatDialog,private store: Store<State>) { }

  
  ngOnInit(): void {
//     this.getData.getUserAccountSummary().subscribe((resuslt)=>{
// console.log(resuslt)
// this.data=resuslt;
// this.dataSource=this.data;
//     });
this.transactionItems$ = this.store.select((store) => store.transactions);
this.dataSource=this.transactionItems$;
console.log(this.transactionItems$)
  }

  displayedColumns: string[] = ['accountHolder', 'iban', 'amount', 'date','note','actions'];
  //dataSource = this.data;

  
  EditItem(row:any){
console.log(row);
  }
  addItem(){

  }
  openDialogEdit(element:any): void {
    this.dialog.open(DialogComponent, {
      data: {
          account: {
            accountHolder:element.accountHolder,
            iban: element.iban,
            amount:element.amount,
            date:element.date,
            note:element.note,
          },
          edit:'true'
      },
   });
  }
  openDialogAdd(): void {
    this.dialog.open(DialogComponent)
    const dialogRef = this.dialog.open(DialogComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      

      console.log(result.value);
     this.store.dispatch(AddItemAction({payload: result.value}));

    });
    
  }
  openDialogDelete(){
    this.dialog.open(DeleteDialogComponent)

  }
  
  
}


