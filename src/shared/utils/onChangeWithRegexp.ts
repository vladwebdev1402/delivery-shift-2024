export const onChangeWithRegexp = (
  reg: RegExp,
  setValue: (value: string) => void
) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (reg.test(inputValue)) setValue(inputValue);
  };
};
