const now = new Date('2020-05-01');
// new Date.parse('2020-05-01');
console.log(now.setHours(18, 40));
console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 10; i++) {
	let some = i ** 3;
	console.log(some);
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд `);