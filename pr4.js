// Phương thức All và Race

let add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a != 'number' || typeof b != 'number') {	
				return reject(new Error('ADD : Tham so phai co kieu number'));
			}
			resolve(a + b);
		}, 2000);
	});
};

let multiply = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a != 'number' || typeof b != 'number') {	
				return reject(new Error('MUL : Tham so phai co kieu number'));
			}
			resolve(a * b);
		}, 1000);
	});
};

// Promise.all([add(4, '5'), multiply('4', 5)])	// input: promises' array
// 	.then(res => console.log(res))				// [ 9, 20 ] theo đúng thứ tự input
// 	.catch(err => console.log(err + ''))		// error của promise hoàn thành trước

Promise.race([add('4', 5), multiply(4, 5)])		// input: promises' array
	.then(res => console.log(res))				// 20 Mul promise hoàn thành trước
	.catch(err => console.log(err + ''))		
// Bất kỳ promise nào trả về kế quả đầu tiên sẽ là kết quả của cả promise.race

