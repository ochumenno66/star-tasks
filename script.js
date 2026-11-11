'use strict';

// Выводим дни недели на русском или английском языке
let lang = 'ru';

// через if
if (lang === 'ru') {
  const ruDays = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];
  for (let i = 0; i < ruDays.length; i++) {
    console.log(ruDays[i]);
  }
} else if (lang === 'en') {
  const enDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  for (let i = 0; i < enDays.length; i++) {
    console.log(enDays[i]);
  }
} else {
  console.log('Язык не поддерживается');
}

// через switch-case
switch (lang) {
  case 'ru':
    console.log(
      `Понедельник\nВторник\nСреда\nЧетверг\nПятница\nСуббота\nВоскресенье`,
    );
    break;
  case 'en':
    console.log(
      `Monday\nTuesday\nWednesday\nThursday\nFriday\nSaturday\nSunday`,
    );
    break;
  default:
    console.log('Язык не поддерживается');
}

// через многомерный массив
let week = [];
week['ru'] = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];
week['en'] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

console.log(week[lang].join('\n'));

// Задача на тернарные операторы
const namePerson = 'Александр';
namePerson === 'Артем'
  ? console.log('директор')
  : namePerson === 'Александр'
    ? console.log('преподаватель')
    : console.log('студент');
