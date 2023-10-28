export const TableHeadTransaction = ({ type, amount, currency }) => {
  return (
    <thead>
      <tr>
        <th>{type}</th>
        <th>{amount}</th>
        <th>{currency}</th>
      </tr>
    </thead>
  );
};
