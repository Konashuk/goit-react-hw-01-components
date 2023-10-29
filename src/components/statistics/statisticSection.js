import { Statistic } from 'components/statistics/statistics';
import { List } from 'components/profile/profile.styled';

export const StaticticSection = ({ status, title }) => {
  return (
    <section>
      {title !== undefined && <h2>{title}</h2>}

      <List>
        {status.map(ar => {
          return (
            <Statistic type={ar.label} percent={ar.percentage} key={ar.id} />
          );
        })}
      </List>
    </section>
  );
};
