// let n = 10;
// let i = 11;//biểu thức 1 khởi tạo biến lặp
// while (i <= n) { //biểu thức 2: điều kiện lặp
//     console.log(i);
//     i++;//biểu thức 3: thay đổi biến lặp sau mỗi lần lặp
// }

// do {//vòng lặp do while sẽ thực thi câu lệnh ít nhất 1 lần
//     console.log(i);
//     i++;
// } while (i <= n);

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// const ul = document.getElementById("ul");

// for (let i = 1; i <= 1000; i++) {
//     let li = document.createElement("li");
//     li.innerHTML = i;
//     ul.appendChild(li);
// }

// let studentListName = ["Thắng", "Tùng", "Trinh", "Uy"];
// console.log(studentListName);
// console.log(studentListName[3]);//read
// studentListName.push("Thành viên mới");//thêm phần tử mới vào cuối mảng
// console.log(studentListName);
// studentListName[4] = "Thắng 2";//update
// console.log(studentListName);
studentListName.splice(1, 1);//xóa đi phần tử trong mảng, tham số thứ 1 là vị trí bắt đầu xóa, tham số thứ 2 là số phần tử sẽ xóa
// console.log(studentListName);

// for (let i = 0; i < studentListName.length; i++) {
//     console.log(studentListName[i]);
// }

// // studentListName[8] = "Vũ new";
// // console.log(studentListName);

// // let arrayNew = ["string", 1];
// // for (let i = studentListName.length - 1; i >= 0; i--) {
// //     if (studentListName[i] == "Hải Đăng") {
// //         console.log("Hải Đăng ở vị trí thứ " + i);
// //     }
// // }

// // console.log(studentListName[studentListName.length - 1]);

// //from last index in từ cuối mảng

// //Object

// let teacher = {
//     teacherName: "Thắng",
//     place: "HCM",
//     country: "VN",
//     company: "MindX",
//     age: 25
// }

// console.log(teacher);
// //Read
// console.log(teacher.country);
// //Update
// teacher.place = "HN";
// console.log(teacher);
// //Create
// teacher.salary = "100M";
// console.log(teacher);
// //Delete
// delete teacher.salary
// console.log(teacher);

// let danhSachNgonNguLapTrinh = ["Javascript", "C", "Python"];

// console.log(danhSachNgonNguLapTrinh);

// danhSachNgonNguLapTrinh.push("PHP");
// console.log(danhSachNgonNguLapTrinh);

// console.log(danhSachNgonNguLapTrinh[1]);
// danhSachNgonNguLapTrinh[0] = "Typescript";
// console.log(danhSachNgonNguLapTrinh);

// let pet = {
//     petName: "Nâu",
//     species: "Dog",
//     color: "Brown"
// }
// console.log(pet);
// pet.age = 3;
// console.log(pet);
