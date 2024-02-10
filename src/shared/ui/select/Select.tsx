import classNames from 'classnames';
import { ComponentPropsWithRef, FC, useRef, useState } from 'react';

import ArrowIcon from '@/shared/assets/arrow-down.svg?react';
import { useClickOutside } from '@/shared/hooks';

import st from './Select.module.scss';

interface SelectProps extends ComponentPropsWithRef<'div'> {
  currentValue: string;
  handleChange: (value: string) => void;
  values?: { name: string; value: string }[];
  options?: { name: string; value: string }[];
  label?: string;
  placeholder?: string;
  StartIcon?: JSX.Element;
}

interface MenuItemProps extends ComponentPropsWithRef<'button'> {
  changeValue: (value: string) => void;
  handleClose: () => void;
  value: string;
}

interface SelectOptionProps extends ComponentPropsWithRef<'button'> {
  changeValue: (value: string) => void;
  value: string;
}

const Select: FC<SelectProps> = ({
  currentValue,
  label,
  handleChange,
  values = [],
  options = [],
  StartIcon = <></>,
  className = '',
  placeholder = '',
  children = <></>,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectClasses = classNames(st.select, className, {
    [st.select_open]: isOpen,
  });

  const handleClose = () => setIsOpen(false);
  const onSelectClick = () => setIsOpen(!isOpen);
  const refSelect = useRef(null);

  useClickOutside(refSelect, () => {
    if (isOpen) handleClose();
  });

  return (
    <div className={selectClasses} {...props} ref={refSelect}>
      <div className={st.select__label}>{label}</div>
      <button onClick={onSelectClick} className={st.select__button}>
        {StartIcon}
        {currentValue ? (
          <span>{currentValue}</span>
        ) : (
          <span className={st.select__placeholder}>{placeholder}</span>
        )}
        <ArrowIcon className={st.select__arrow} />
      </button>
      <div className={st.select__body}>
        {values.length > 0
          ? values.map((value) => (
              <MenuItem
                key={value.value}
                value={value.value}
                changeValue={handleChange}
                handleClose={handleClose}>
                {value.name}
              </MenuItem>
            ))
          : children}
      </div>
      <div className={st.select__options}>
        {options.map((option) => (
          <SelectOption
            key={option.value}
            value={option.value}
            changeValue={handleChange}>
            {option.name}
          </SelectOption>
        ))}
      </div>
    </div>
  );
};

const MenuItem: FC<MenuItemProps> = ({
  changeValue,
  handleClose,
  children,
  value,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`${className} ${st.select__item}`}
      {...props}
      onClick={() => {
        handleClose();
        changeValue(value);
      }}>
      {children}
    </button>
  );
};

const SelectOption: FC<SelectOptionProps> = ({
  value,
  changeValue,
  children,
  ...props
}) => {
  return (
    <button
      className={st.select__option}
      {...props}
      onClick={() => changeValue(value)}>
      {children}
    </button>
  );
};

export { Select, MenuItem, SelectOption };
