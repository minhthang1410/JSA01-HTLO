// làm xong thì viết 1 đoạn code kiểm tra số chẵn hoặc lẻ

// viết 1 đoạn code in giá trị tuyệt đối của 1 số.
//kiểm tra số chẵn số lẻ
// let x = 20;
// let phandu = x % 2;

// if (phandu == 0) {
//     console.log("x là số chẵn");
// } else {
//     console.log("x là số lẻ");
// }

//in giá trị tuyệt đối của 1 số
let y = -17.36;
let abs;

if (y < 0) {
    abs = y * -1;
} else {
    abs = y;
}

console.log("Giá trị tuyệt đối của " + y + " là " + abs);