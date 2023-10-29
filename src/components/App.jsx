import { Profile } from './profile/profile';
import { StaticticSection } from './statistics/statisticSection';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import { FriendList } from './friendList/friendsList';
import { TransactionHistory } from './transaction/TransactionHistory';
import { GlobalStyles } from './globalStyles';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        gap: 40,
        flexDirection: 'column',
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
      <div>
        <TransactionHistory items={transactions} />
      </div>
      <GlobalStyles />
    </div>
  );
};
