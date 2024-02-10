import { useGetPackageTypesQuery } from '@/service/DeliveryService';
import { FC, useState } from 'react';
import { Control, Controller } from 'react-hook-form';

import ConvertIcon from '@/shared/assets/convert.svg?react';
import { Select, SelectItem, Tab, TabsGroup } from '@/shared/ui';

import st from './CalculateForm.module.scss';
import SizeForm from './SizeForm';
import { CalculateValues, PackageValues } from './types';

interface PackageControllerProps {
  control: Control<CalculateValues, void, CalculateValues>;
  value: string;
  setApproxPackage: (id: string) => void;
  setExactPackage: (value: PackageValues) => void;
}

const PackageController: FC<PackageControllerProps> = ({
  control,
  value,
  setApproxPackage,
  setExactPackage,
}) => {
  const { data: packageTypes } = useGetPackageTypesQuery();
  const [typeSize, setTypeSize] = useState<'approx' | 'exact'>('approx');
  return (
    <Controller
      name="stringPackage"
      control={control}
      rules={{
        required: 'Поле необходимо обязательно заполнить',
      }}
      render={({ fieldState }) => (
        <Select
          label="Размер посылки"
          placeholder="Размер посылки"
          currentValue={value}
          handleChange={(value: string) => {
            setApproxPackage(value);
          }}
          StartIcon={<ConvertIcon />}
          className={st.calculate__item}
          error={fieldState.error?.message || ''}
          isOpenUp>
          <TabsGroup className={st.calculate__tabs}>
            <Tab
              active={typeSize === 'approx'}
              onClick={() => setTypeSize('approx')}
              className={st.calculate__tab}
              variant="outlined">
              Примерные
            </Tab>
            <Tab
              active={typeSize === 'exact'}
              onClick={() => setTypeSize('exact')}
              className={st.calculate__tab}
              variant="outlined">
              Точные
            </Tab>
          </TabsGroup>
          {typeSize === 'approx' &&
            packageTypes!.packages.map((pack) => (
              <SelectItem key={pack.id} value={pack.id}>
                {pack.name}, {pack.length}х{pack.width}х{pack.height} см
              </SelectItem>
            ))}
          {typeSize === 'exact' && (
            <SizeForm setExactPackage={setExactPackage} />
          )}
        </Select>
      )}
    />
  );
};

export default PackageController;
