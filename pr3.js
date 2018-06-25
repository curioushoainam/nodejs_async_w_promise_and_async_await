let add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a != 'number' || typeof b != 'number') {	
				return reject(new Error('Tham so phai co kieu number'));
			}
			resolve(a + b);
		}, 1000);
	});
};

//// ============================================================
// (4 + 5) + 6
// 'then' trả về một đối tượng Promise
// add(4, '5').then(res => add(res, '6')
// 				, err => console.log(err + ''))
// 		 	.then(result => console.log('result is ', result)			// 'then' này là của promise do 'then' trên trả về
// 		 		, error => console.log('error is ', error + '')
// 		 	);

// add(4, '5').then(res => add(res, '6'))				
// 		   	.then(result => console.log('result is ', result))	// 'then' này là của promise do 'then' trên trả về
// 		 	.catch(err => console.log(err + '')); 				// khi có lỗi, lập tức catch bắt						

//// ============================================================
let multiply = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a != 'number' || typeof b != 'number') {	
				return reject(new Error('Tham so phai co kieu number'));
			}
			resolve(a * b);
		}, 1000);
	});
};

let divide = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a != 'number' || typeof b != 'number') {	
				return reject(new Error('Tham so phai co kieu number'));
			}
			if(b == 0) return reject(new Error('Chi cho so 0'));
			resolve(a / b);
		}, 1000);
	});
};

let tinhDienTich = (a, b, h) => {
	return add(a, b)
			.then(res => multiply(res, h))
			.then(result => divide(result, 2))
}

tinhDienTich(3, 3, 2)
	.then(square => console.log('Dien tich hinh thang : ' + square))
	.catch(err => console.log('Loi : ' + err))