// function trong Promise được thực thi trước khi đối tượng Promise được tạo ra
// let aPromise = new Promise(() => {
// 	console.log('hello');
// });


// hai đối số giúp cho người dùng kiểm soát trạng thái của Promise
// resolve : thành công
// reject : thất bại
// chỉ một cái được thực thi
// let aPromise = new Promise((resolve, reject) => {
// 	//resolve('Thành công');
// 	reject ( new Error('Khong the ket noi voi Server'));
// });

// // 'then' gắn cho aPromise 1 hàm thực thi
// // msg là kết quả của resolve và errMsg là kết quả của reject
// // thành công, thực hiện hàm bên trái ; thất bại thực hiện hàm bên phải
// aPromise.then((msg) => console.log('Da thuc thi: ', msg), (errMsg) => console.log(errMsg + ''));

//// ====================================================================================
let aPromise = new Promise((resolve, reject) => {	
	setTimeout(() => {
		//reject ( new Error('Khong the ket noi voi Server'));
		resolve('Thành công');	
	}, 2000);
	
});
aPromise.then((msg) => console.log('Da thuc thi: ', msg), (errMsg) => console.log(errMsg + ''));