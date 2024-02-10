import {Control} from 'react-hook-form';

export interface PackageValues {
  length: string;
  width: string;
  weight: string;
  height: string;
}

export interface CalculateValues extends PackageValues {
  startCity: string;
  endCity: string;
  stringPackage: string;
}

export interface ControllerProps {
  control: Control<CalculateValues, void, CalculateValues>;
  value: string;
  setValue: (value: string) => void;
}
