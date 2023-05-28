//Bài 1
// let x = 10.2450827498;
// let phannguyen = Math.floor(x);
// if (x < 0) {
//     console.log("x là số âm");
// } else if (x == 0) {
//     console.log("x bằng 0");
// } else {
//     if (x - phannguyen == 0) {
//         console.log("x là số nguyên dương");
//     } else {
//         console.log("x là số thập phân dương");
//     }
// }

//Bài 2
// let a = 19999;
// let b = 12;
// let c = 192;
// let max;

// if (a < b) {
//     max = b;
// } else {
//     max = a;
// }
// if (max < c) {
//     max = c;
// }
// console.log("Giá trị lớn nhất là: " + max);

//Bài 3
// let dtb = 9;

// if (dtb < 5) {
//     console.log("Hạng F");
// } else if (dtb < 7) {
//     console.log("Hạng C");
// } else if (dtb < 9) {
//     console.log("Hạng B");
// } else {
//     console.log("Hạng A");
// }

//Bài 4
let a = 1;
let b = -11;
let c = 30;

if (a == 0) {
    let x = -c / b;
    console.log("Nghiệm của phương trình là: " + x);
} else {
    let delta = (b * b) - (4 * a * c);
    if (delta < 0) {
        console.log("Phương trình vô nghiệm");
    } else if (delta == 0) {
        let x = (-1 * b) / (2 * a);
        console.log("Phương trình có nghiệm kép, x = " + x);
    } else {
        let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
        let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a);
        console.log("Phương trình có 2 nghiệm phân biệt: x1 = " + x1 + ";x2 = " + x2);
    }
}