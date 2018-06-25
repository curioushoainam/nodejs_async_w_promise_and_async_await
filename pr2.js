// let add = (a, b) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (typeof a != 'number' || typeof b != 'number') {	
// 				return reject(new Error('Tham so phai co kieu number'));
// 			}
// 			resolve(a + b);
// 		}, 1000);
// 	});
// };

// add(4, '5').then(res => console.log(res), err => console.log(err + ''));

////=======================================================================
let fs = require('fs');
var src = './file.txt';
// fs.readFile(src, 'utf-8', (err, data) => {
// 	if (err) return console.log('Error is ' + err);
// 	console.log(data);
// });

// let promiseRead = new Promise((resolve, reject) => {
// 	fs.readFile(src, 'utf-8', (err, data) => {
// 	if (err) return reject(err);
// 	resolve(data);
// 	});
// });

//promiseRead.then(data => console.log(data), err => console.log(err + ''));

// tái sử dụng dưới dạng function
let read = (filename) => {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, 'utf-8', (err, data) => {
			if (err) return reject(err);
			resolve(data);
		});
	});
};

read(src).then(data => console.log(data), err => console.log(err + ''));