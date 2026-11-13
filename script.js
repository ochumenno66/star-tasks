'use strict';

let arr = ['28491', '7305', '419820', '95142', '2064', '638719', '47503'];

arr.forEach((num) => {
  if (num[0] === '2') {
    console.log(num);
  } else if (num[0] === '4') {
    console.log(num);
  }
});

// находим простые числа
for (let i = 1; i <= 100; i++) {
  let count = 0;
  for (let a = 2; a < i; a++) {
    if (i % a === 0) {
      count++;
    }
  }
  if (count === 0 && i > 1) {
    console.log('Делители числа ' + i + ' : 1 и ' + i);
  }
}
