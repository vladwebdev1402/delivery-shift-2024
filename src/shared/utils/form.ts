export const validateAlphabet = (value: string) => {
  const eng = /[A-Za-z]/;
  const ru = /[А-Яа-я]/;

  if (eng.test(value) && ru.test(value))
    return 'Значение должно быть задано с использованием одного из следующих алфавитов: кириллического, латинского';
  return true;
};

export const endAddressSpecialCharacter = (value: string) =>
  !/[““""',/`‘:;\-_.,#]$/.test(value) ||
  'Недопустим ввод спец. символов в начале и в конце строки';

export const startAddressSpecialCharacter = (value: string) =>
  !/^[““""',/`‘:;\-_.,#]/.test(value) ||
  'Недопустим ввод спец. символов в начале и в конце строки';

export const endUserSpecialCharacter = (value: string) =>
  !/[`'-]$/.test(value) ||
  'Недопустим ввод спец. символов в начале и в конце строки';

export const startUserSpecialCharacter = (value: string) =>
  !/^[`'-]/.test(value) ||
  'Недопустим ввод спец. символов в начале и в конце строки';

export const USER_PATTERN =
  /^(?:[А-Яа-я][А-Яа-я `'-]{1,60}[А-Яа-я]|[A-Za-z][A-Za-z `'-]{1,60}[A-Za-z])$/;
export const ADDRESS_PATTERN =
  /^(?:[А-Яа-я][А-Яа-я  ““""',/`‘:;\-_.,#]{1,60}[А-Яа-я]|[A-Za-z][A-Za-z  ““""',/`‘:;\-_.,#]{1,60}[A-Za-z])$/;
