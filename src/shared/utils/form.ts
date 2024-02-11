export const validateAlphabet = (value: string) =>
  (/[A-Za-z]/.test(value) && !/[А-Яа-я]/.test(value)) ||
  (!/[A-Za-z]/.test(value) && /[А-Яа-я]/.test(value)) || !value ||
  'Значение должно быть задано с использованием одного из следующих алфавитов: кириллического, латинского';

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
