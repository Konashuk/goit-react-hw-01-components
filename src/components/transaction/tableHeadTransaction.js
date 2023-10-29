import { Table, PartTableTh } from './transactionhistory.styled';
export const TableHeadTransaction = ({ type, amount, currency }) => {
  return (
    <Table>
      <tr>
        <PartTableTh>{type}</PartTableTh>
        <PartTableTh>{amount}</PartTableTh>
        <PartTableTh>{currency}</PartTableTh>
      </tr>
    </Table>
  );
};
