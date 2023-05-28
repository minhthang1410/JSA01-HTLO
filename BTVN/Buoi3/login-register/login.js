// function submitLogin() {
//     event.preventDefault();
//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;
//     if (username.includes("@")) {
//         alert("Username không được chứa ký tự đặc biệt !!!");
//     } else {
//         alert("Username hợp lệ !!!");
//     }

//     if (password.length < 8) {
//         alert("Password phải lớn hơn 8 ký tự !!!");
//     } else {
//         alert("Password hợp lệ !!!");
//     }
// }

document.getElementById("form").addEventListener("submit", function() {
    alert("Form is submited !!!!");
})