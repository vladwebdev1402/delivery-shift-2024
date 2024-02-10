import { useState } from 'react';

import MapPointIcon from '@/shared/assets/map-point.svg?react';
import TelegramIcon from '@/shared/assets/telegramm.svg?react';
import { Select } from '@/shared/ui';

import st from './CalculateForm.module.scss';
import { citys, citysOptions } from './mock';

const CalculateForm = () => {
  const [calculate, setCalculate] = useState({
    startCity: '',
    endCity: '',
    name: '',
    length: '',
    width: '',
    height: '',
    weight: '',
  });
  const [city, setCity] = useState('');

  return (
    <div className={st.calculate}>
      <h2>Рассчитать доставку</h2>
      <Select
        currentValue={city}
        className={st.calculate__select}
        label="Город отправки"
        placeholder="Выберите город"
        handleChange={(value: string) => setCity(value)}
        options={citysOptions}
        values={citys}
        StartIcon={<MapPointIcon />}
      />
      <Select
        currentValue={city}
        className={st.calculate__select}
        label="Город назначения"
        placeholder="Выберите город"
        handleChange={(value: string) => setCity(value)}
        options={citysOptions}
        values={citys}
        StartIcon={<TelegramIcon />}
      />
    </div>
  );
};

export default CalculateForm;
