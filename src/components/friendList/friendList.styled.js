import styled from 'styled-components';

export const FriendItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: gray;
`;

export const MarketItem = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => (props.$onlineStatus ? 'green' : 'red')};
  margin-right: 10px;
`;

export const Text = styled.p`
  font-size: 14px;
`;
