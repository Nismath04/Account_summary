import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ValidatorService } from 'angular-iban';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  accountIban: any;
  iban: any;
  date: any;
  accountHolder: any;
  amount: any;
  accountDate: any;
  accountNote: any;
  edit: any;
  accountAmount: any;
  note: any;



  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      console.log(data)
      this.accountHolder = data.account.accountHolder
      this.accountIban = data.account.iban
      this.accountAmount = data.account.amount
      this.accountDate = data.account.date
      this.accountNote = data.account.note
      this.edit = data.edit


    }
    if (this.edit) {
      this.iban   = new FormControl(this.accountIban, [Validators.required, ValidatorService.validateIban],);
      this.date   = new FormControl(this.accountDate, [Validators.required],);
      this.amount = new FormControl(this.accountAmount, [Validators.required],);
      this.note   = new FormControl(this.accountNote, [Validators.required],);



    }
    else {
      this.iban   = new FormControl('', [Validators.required, ValidatorService.validateIban],);
      this.date   = new FormControl('', [Validators.required],);
      this.amount = new FormControl('', [Validators.required,Validators.min(2),Validators.max(8)]);
      this.note   = new FormControl('');

    }
  }

  ngOnInit(): void {

  }
  getErrorMessage() {
    if (this.iban.hasError('required')) {
      return 'You must enter a value';
    }

    return this.iban.hasError('iban') ? 'Not a valid iban' : '';
  }
  getErrorMessageAmount(){
    if (this.amount.hasError('required')) {
      return 'You must enter a value';
    }
    return this.amount.hasError('amount') ? '' : 'enter max 8 characters, min 2 characters';
  }
}
