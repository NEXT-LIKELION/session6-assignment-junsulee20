const numbers = [3, 7, 2, 9, 12, 6, 15, 8, 4];

const even_num = numbers.filter(value => value % 2 === 0);

const multi = even_num.map(num => num ** 2);

const sum = multi.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
