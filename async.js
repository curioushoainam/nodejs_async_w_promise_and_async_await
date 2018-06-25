// Đồng bộ là các câu lệnh trên chạy xong thì mới chạy câu lệnh dưới
// Bất đồng bộ là các câu lệnh trên chạy chưa xong nhưng câu lệnh dưới đã được thực thi

// Các câu lệnh trong chương trình bất đồng bộ vẫn chạy từ trên xuống nhưng không có nghĩa là chạy trước sẽ kết thúc trước

// setTimeout(() => {
// 	console.log('Đã hết 1 giây')
// }, 1000);

// console.log('Kết thúc');	// xuất ra màn hình trước.

// ===================================================
// Trong 1 tác vụ bất đồng bộ, các call-back funtion chỉ được thực hiện sau khi tất cả các tác vụ đồng bộ thực thi xong hết

// setTimeout(() => {
// 	console.log('Đã hết 1 giây')		// xuất ra sau cùng
// }, 0);

// console.log('Kết thúc');
// let a = 5;
// a ++;
// console.log(a);		

// ===================================================
// Tác vụ nào là đồng bộ hay bất đồng bộ => tham khảo document
// Một hàm bất đồng bộ thường có call-back function và được gọi khi đã thực thi xong

let fs = require('fs');
var src = './file.txt';

// fs.readFile(src, 'utf-8', (err, data) => {
// 	if (err) return console.log('readFile error :', err);
// 	console.log('data is ', data);
// });
// console.log('End task');

let data = fs.readFileSync(src, 'utf-8');
console.log(data);
console.log('End task');

// ===================================================

