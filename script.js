'use strict';

let week = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

let newWeek = [];

let todayIndex = new Date().getDay();
todayIndex = todayIndex === 0 ? 6 : todayIndex - 1;

week.forEach(function (day, index) {
  if ((day === 'Суббота' || day === 'Воскресенье') && index === todayIndex) {
    newWeek.push('<b><i>' + day + '</i></b>');
  } else if (index === todayIndex) {
    newWeek.push('<b>' + day + '</b>');
  } else if (day === 'Суббота' || day === 'Воскресенье') {
    newWeek.push('<i>' + day + '</i>');
  } else {
    newWeek.push(day);
  }
});

document.body.innerHTML = newWeek.join('<br>');
