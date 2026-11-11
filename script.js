'use strict';

const processString = function (text) {
  if (typeof text === 'string') {
    alert('В качестве аргумента передана строка');
  } else {
    alert('Упс, не то');
  }

  text = text.trim();

  if (text.length > 30) {
    text = text.slice(0, 30) + '...';
  }
  return text;
};

processString(
  '   Сегодня прекрасный день, чтобы изучать JavaScript и создавать что-то интересное!    ',
);
