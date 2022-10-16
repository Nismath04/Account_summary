import { TransactionItem } from './transactions.model';

export interface State {
  readonly transactions: Array<TransactionItem>;
}