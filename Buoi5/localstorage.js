localStorage.setItem("name", "Thắng");
localStorage.setItem("job", "teacher");
localStorage.setItem("age", "25");

let teacherName = localStorage.getItem("name");
console.log(teacherName);
localStorage.removeItem("name");
//localStorage.clear();