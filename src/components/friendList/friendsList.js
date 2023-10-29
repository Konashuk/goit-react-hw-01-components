import { FriendListItem } from './friendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} {...friend} />;
      })}
    </ul>
  );
};
