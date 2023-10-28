export const Statistic = ({ type, percent }) => {
  return (
    <div>
      <span class="label">{type}</span>
      <span class="percentage">{percent}</span>
    </div>
  );
};
