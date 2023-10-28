import { TableHeadTransaction } from './tableHeadTransaction';
import { Transaction } from './transaction';

export const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
      <TableHeadTransaction type="Type" amount="Amount" currency="Currency" />
      <tbody>
        {items.map(transaction => {
          return (
            <Transaction
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};
