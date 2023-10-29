import { FriendItem, MarketItem, Text } from './friendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <MarketItem $onlineStatus={isOnline}></MarketItem>
      <img src={avatar} alt={name} width="48" />
      <Text>{name}</Text>
    </FriendItem>
  );
};
