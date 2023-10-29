import { Item } from 'components/profile/profile.styled';

export const Statistic = ({ type, percent }) => {
  return (
    <Item>
      <span>{type}</span>
      <span>{percent}%</span>
    </Item>
  );
};
