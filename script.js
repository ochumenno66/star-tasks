// Произведение (умножение) цифр числа из переменной num
let num = 266219;
let result = 1;

let arrNum = num.toString().split('');
for (let i = 0; i < arrNum.length; i++) {
  result *= arrNum[i];
}
console.log(result);

// Возведение в степень 3
result = result ** 3;
console.log(result.toString().slice(0, 2));
