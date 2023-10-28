import { Statistic } from 'components/statistics/statistics';

export const StaticticSection = ({ status, title }) => {
  return (
    <section class="statistics">
      {title !== undefined && <h2>{title}</h2>}

      <ul class="stat-list">
        {status.map(ar => {
          return (
            <li class="item" key={ar.id}>
              <Statistic type={ar.label} percent={ar.percentage} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
