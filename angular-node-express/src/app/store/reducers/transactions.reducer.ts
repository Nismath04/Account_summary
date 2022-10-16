import { Action, createReducer, on } from '@ngrx/store';
import { TransactionItem } from '../models/transactions.model';
import { AddItemAction } from '../actions/transactions.action';

//create a dummy initial state
const initialState: Array<TransactionItem> = [
    // {
    //     accountHolder: 'Gopi',
    //     IBAN: 'af2342fsa',
    //     date: '21/10/2022',
    //     amount: '1000',
    //     note: 'Paid to mr x'
    // },
    // {
    //     accountHolder: 'Jayesh',
    //     IBAN: 'sf322fsa',
    //     date: '22/10/2022',
    //     amount: '500',
    //     note: 'Paid to mr y'
    // },
    {
        "accountHolder": "Max Mustermann",
        "iban": "DE75512108001245126199",
        "amount": 100.1,
        "date": "2022-07-01T15:55:46.936Z",
        "note": "A new transfer"
      },
      {
        "accountHolder": "Max Musterfrau",
        "iban": "DE75512108001245126199",
        "amount": 200,
        "date": "2022-07-02T15:55:46.936Z",
        "note": "A new transfer"
      }
];

const reducer = createReducer(
   initialState,
   on(AddItemAction, (state, action) => {
       console.log(action,'reducer');
       
      return [...state, action.payload]
   })
);

export function TransactionReducer(state: Array<TransactionItem> | undefined, action: Action) {
  return reducer(state, action);
}