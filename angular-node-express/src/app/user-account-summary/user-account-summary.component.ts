import { Component, OnInit } from '@angular/core';
import { UserAccountService } from '../config/user-account.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

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

  constructor(private getData:UserAccountService,public dialog: MatDialog) { }

  
  ngOnInit(): void {
    this.getData.getUserAccountSummary().subscribe((resuslt)=>{
console.log(resuslt)
this.data=resuslt;
this.dataSource=this.data;
    });
    
  }

  displayedColumns: string[] = ['accountHolder', 'iban', 'amount', 'date','note','actions'];
  dataSource = this.data;

  
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
    
  }
  openDialogDelete(){
    this.dialog.open(DeleteDialogComponent)

  }
  
  
}


