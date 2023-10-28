export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li
      class="item"
      // style={{ listStyleType: 'circle', color: isOnline ? 'green' : 'red' }}
      style={{ listStyle: 'none', display: 'flex', alignItems: 'center' }}
    >
      <span
        class="status"
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: isOnline ? 'green' : 'red',
          marginRight: '10px',
        }}
      ></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class={name}></p>
    </li>
  );
};
