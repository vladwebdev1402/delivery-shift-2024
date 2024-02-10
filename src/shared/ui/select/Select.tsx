import classNames from 'classnames';
import {
  ComponentPropsWithRef,
  FC,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import ArrowIcon from '@/shared/assets/arrow-down.svg?react';
import { useClickOutside } from '@/shared/hooks';

import st from './Select.module.scss';
import SelectSubitem from './SelectSubitem';

interface SelectProps extends ComponentPropsWithRef<'div'> {
  currentValue: string;
  handleChange: (value: string) => void;
  options?: { name: string; value: string }[];
  label?: string;
  placeholder?: string;
  StartIcon?: JSX.Element;
  error?: string;
  isOpenUp?: boolean;
}

const Select: FC<SelectProps> = ({
  currentValue,
  label,
  handleChange,
  options = [],
  StartIcon = <></>,
  className = '',
  error = '',
  placeholder = '',
  children = <></>,
  isOpenUp = false,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentName, setCurrentName] = useState('');
  const refBody = useRef<HTMLDivElement>(null);

  const selectClasses = classNames(st.select, className, {
    [st.select_open]: isOpen,
    [st.select_error]: error,
    [st.select_openUp]: isOpenUp,
  });

  const handleOpen = () => {
    setTimeout(() => setIsOpen(true), 50);
  };

  const handleClose = () => setIsOpen(false);

  const onSelectClick = () => {
    if (!isOpen) handleOpen();
    else handleClose();
  };

  useClickOutside(refBody, () => {
    if (isOpen) handleClose();
  });

  const onChangeSelectItem = (e: MouseEvent<HTMLDivElement>) => {
    if (
      e.target instanceof HTMLButtonElement &&
      e.target.classList.contains(st.select__item)
    ) {
      handleChange(e.target.dataset.value || '');
      handleClose();
    }
  };

  useEffect(() => {
    if (refBody.current) {
      const body = refBody.current;
      const options = Array.from(body.children) as HTMLDivElement[];
      setCurrentName(
        options
          .filter((option) => option.classList.contains(st.select__item))
          .find((option) => option.dataset.value === currentValue)?.innerText ||
          currentValue
      );
    }
  }, [currentValue, refBody]);

  return (
    <div className={selectClasses} {...props}>
      <div className={st.select__label}>{label}</div>
      <button
        onClick={onSelectClick}
        className={st.select__button}
        type="button">
        {StartIcon}
        {currentName ? (
          <span>{currentName}</span>
        ) : (
          <span className={st.select__placeholder}>{placeholder}</span>
        )}
        <ArrowIcon className={st.select__arrow} />
      </button>
      <div
        className={st.select__body}
        onClick={onChangeSelectItem}
        ref={refBody}>
        {children}
      </div>
      <div className={st.select__error}>{error}</div>
      <div className={st.select__options}>
        {options.map((option) => (
          <SelectSubitem
            key={option.value}
            value={option.value}
            changeValue={handleChange}>
            {option.name}
          </SelectSubitem>
        ))}
      </div>
    </div>
  );
};

export default Select;
