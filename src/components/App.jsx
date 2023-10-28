import { Profile } from './profile/profile';
import { StaticticSection } from './statisticSection/statisticSection';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import { FriendList } from './friendList/friendsList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <StaticticSection status={data} />
      </div>
      <div>
        <StaticticSection title="Upload stats" status={data} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
    </div>
  );
};
