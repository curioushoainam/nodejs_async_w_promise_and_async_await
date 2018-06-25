// var a = 10;
// console.log(a);

// ===================================
// if(true){
// 	var b = 5;
// }
// console.log('b = ', b);

// if(true){
// 	let b = 5;
// }
// console.log('b = ', b);		// error

// ===================================

//let arr = [4, 5, 7, 3, 9];

// arr.forEach(function(e){
// 	console.log(e);
// });

//// Nếu có 1 tham số : e is (e); nếu có 0 hoặc 2 tham số trở lên thì phải (a, b) =>
//// Nếu có 1 biểu thức : bieu-thuc is { bieu-thuc ; }, Nếu có từ 2 biểu thức trở lên thì phải có {}
// arr.forEach(e => sonsole.log(e) );

//// ----------------------------------
// var arr2 = arr.map(function(e){
// 	return e * 2;
// });
// console.log('arr2 = ', arr2);

//// dấu arrow (=>) bao gồm key-word "return" nên sẽ không có chữ return trong biểu thức 
// var arr2 = arr.map(e => e * 2);
// console.log('arr2* = ', arr2);

// ===================================
// function add(a, b) {
// 	return a + b;
// }

// let add = (a, b) => a + b;

// console.log(add(3, 4));

// ===================================
// function trả về một function
// let getFunc = (num) => {
// 	if (num >= 0){
// 		return () => console.log('Positive number');
// 	} 
// 	return () => console.log('Negative number');
	
// };

// getFunc(-1)();		// dấu () có ý nghĩa là thực thi hàm trả về

// ===================================
// Function không có lệnh return thì trả vền undefined
// let a = () => {}
// console.log(a());