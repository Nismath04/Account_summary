import { createAction, props } from '@ngrx/store';
import { TransactionItem } from '../models/transactions.model';

export const AddItemAction = createAction(
  '[TRANSACTION] Add Item',
  props<{payload: TransactionItem}>()
);