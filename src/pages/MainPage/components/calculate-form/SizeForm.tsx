import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/shared/ui';
import Input from '@/shared/ui/input/Input';
import { onChangeWithRegexp } from '@/shared/utils';

import st from './CalculateForm.module.scss';
import { PackageValues } from './types';

interface SizeFormProps {
  setExactPackage: (value: PackageValues) => void;
}

const SizeForm: FC<SizeFormProps> = ({ setExactPackage }) => {
  const { setValue, watch, formState, handleSubmit, register } =
    useForm<PackageValues>();

  const onSubmit = () => {
    handleSubmit((data) => setExactPackage(data))();
  };

  return (
    <div className={st.size}>
      <div className={st.size__item}>
        <div className={st.size__title}>Длина</div>
        <Input
          placeholder="см"
          fullWidth
          {...register('length', {
            required: 'Обязательное поле',
          })}
          value={watch('length')}
          onChange={onChangeWithRegexp(/^[1-9]{0,}[0-9]{0,}$/, (value) =>
            setValue('length', value)
          )}
          error={formState.errors.length?.message || ''}
        />
      </div>
      <div className={st.size__item}>
        <div className={st.size__title}>Ширина</div>
        <Input
          placeholder="см"
          fullWidth
          {...register('width', {
            required: 'Обязательное поле',
          })}
          value={watch('width')}
          onChange={onChangeWithRegexp(/^[1-9]{0,}[0-9]{0,}$/, (value) =>
            setValue('width', value)
          )}
          error={formState.errors.width?.message || ''}
        />
      </div>
      <div className={st.size__item}>
        <div className={st.size__title}>Высота</div>
        <Input
          placeholder="см"
          fullWidth
          {...register('height', {
            required: 'Обязательное поле',
          })}
          value={watch('height')}
          onChange={onChangeWithRegexp(/^[1-9]{0,}[0-9]{0,}$/, (value) =>
            setValue('height', value)
          )}
          error={formState.errors.height?.message || ''}
        />
      </div>
      <div className={st.size__item}>
        <div className={st.size__title}>Вес</div>
        <Input
          placeholder="кг"
          fullWidth
          {...register('weight', {
            required: 'Обязательное поле',
          })}
          value={watch('weight')}
          onChange={onChangeWithRegexp(/^[1-9]{0,}[0-9]{0,}$/, (value) =>
            setValue('weight', value)
          )}
          error={formState.errors.weight?.message || ''}
        />
      </div>
      <Button
        type="button"
        onClick={onSubmit}
        fullWidth
        className={st.size__btn}>
        Сохранить
      </Button>
    </div>
  );
};

export default SizeForm;
