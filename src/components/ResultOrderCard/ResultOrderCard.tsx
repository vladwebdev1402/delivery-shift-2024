import { FC } from 'react';

import EditIcon from '@/shared/assets/edit.svg?react';

import st from './ResultOrderCard.module.scss';

interface ResultOrderCardProps {
  title: string;
  onEdit?: () => void;
  values: { name: string; value: string }[];
  className?: string;
}

const ResultOrderCard: FC<ResultOrderCardProps> = ({
  title,
  onEdit,
  values,
  className = '',
}) => {
  return (
    <div className={`${className} ${st.result}`}>
      <div className={st.result__title}>
        {title}
        {onEdit && (
          <button className={st.result__edit} onClick={onEdit}>
            <EditIcon />
          </button>
        )}
      </div>
      <div className={st.result__body}>
        {values.map((item) => (
          <div className={st.result__item} key={item.value}>
            <div className={st.result__name}>{item.name}</div>
            <div className={st.result__value}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultOrderCard;
