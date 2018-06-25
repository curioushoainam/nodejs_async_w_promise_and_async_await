// Callback hell là thuật ngữ chỉ việc có nhiều nhiều tác vụ bất đồng bộ được gọi liên tiếp nhau 
// và tác vụ sau là kết quả của tác vụ trước.

// Tính diện tích hình thang
// let square = (a, b, h) => (a + b) * h/2;
// console.log('S = ' + square(2, 3, 2));

// let add = (a, b, callback) => {
// 	setTimeout(() => {
// 		let err, result;
// 		if (typeof a != 'number' || typeof b != 'number') {
// 			err = 'Tham so phai co kieu number';
// 			return callback(err, result);
// 		}
// 		result = a + b;
// 		return callback(err, result);		
// 	}, 1000);
// }

// Với tham số là undefined và ở vị trí ngoài cùng bên phải, ta có thể bỏ qua.
let add = (a, b, callback) => {
	setTimeout(() => {
		if (typeof a != 'number' || typeof b != 'number') {	
			// với kiểu lỗi
			return callback(new Error('Tham so phai co kieu number'));  // bỏ qua undefined ngoài cùng bên phải
		}
		return callback(undefined, a + b);
	}, 1000);
}

// add(4, '9', (e, res) => {
// 	if(e) return console.log(e);
// 	console.log('Result is ' + res);
// });

let multiply = (a, b, callback) => {
	setTimeout(() => {
		if (typeof a != 'number' || typeof b != 'number') {	
			// với kiểu lỗi
			return callback(new Error('Tham so phai co kieu number'));  // bỏ qua undefined ngoài cùng bên phải
		}
		return callback(undefined, a * b);
	}, 1000);
}

let divide = (a, b, callback) => {
	setTimeout(() => {
		if (typeof a != 'number' || typeof b != 'number') {	
			// với kiểu lỗi
			return callback(new Error('Tham so phai co kieu number'));  // bỏ qua undefined ngoài cùng bên phải
		}

		if(b == 0) return callback(new Error('Chia cho 0'));
		return callback(undefined, a / b);
	}, 1000);
}

let tinhDienTichHinhThang = (a, b, h, callback) => {
	add(a, b, (err, result) => {
		if(err) return callback(err);
		multiply(result, h, (err, result) => {
			if (err) return callback(err);
			divide(result, 2, (err, square) => {
				if (err) return callback(err);
				callback(undefined, square);
			});
		});
	});
};

tinhDienTichHinhThang(2, 3, '2', (err, result) => {
	if(err) return console.log(err + '');
	console.log('Dien tich hinh thang la: ', result);
});
