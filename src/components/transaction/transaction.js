import { PartTableTd } from './transactionhistory.styled';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <tr>
      <PartTableTd>{type}</PartTableTd>
      <PartTableTd>{amount}</PartTableTd>
      <PartTableTd>{currency}</PartTableTd>
    </tr>
  );
};
