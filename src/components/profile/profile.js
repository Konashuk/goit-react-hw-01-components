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
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </Item>
        <Item>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </Item>
        <Item>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </Item>
      </List>
    </ProfileContainer>
  );
};
