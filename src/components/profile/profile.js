import {
  ProfileContainer,
  DescriptionContainer,
  ImgAvatar,
  Text,
  List,
  Item,
} from './profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileContainer>
      <DescriptionContainer>
        <ImgAvatar src={avatar} alt={username} width="120" height="120" />
        <p>{username}</p>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </DescriptionContainer>
      <List>
        <Item>
          <span>Followers</span>
          <span>{followers}</span>
        </Item>
        <Item>
          <span>Views</span>
          <span>{views}</span>
        </Item>
        <Item>
          <span>Likes</span>
          <span>{likes}</span>
        </Item>
      </List>
    </ProfileContainer>
  );
};
