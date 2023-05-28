// let names = ["Thắng 1", "Thắng 2", "Thắng 3"];

// // for (let i = 0; i < names.length; i++) {
// //     console.log(names[i]);
// // }

// //For of
// for (let i of names) {
//     console.log(i);
// }

let teacher = {
    teacherName: "Thắng",
    age: 25,
    place: "HCM",
    company: "MindX"
}

//For in: dùng để lặp trên các thuộc tính của 1 obj
for (let i in teacher) {
    console.log(teacher[i]);
}