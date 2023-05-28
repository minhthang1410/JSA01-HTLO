// let thang1 = document.getElementById("thang1");
// thang1.style = "background-color: red; color: white";
// thang1.innerHTML = "Thắng"
// console.log(thang1);

let divImg = document.getElementById("img");

divImg.style = "border: 1px solid red; height: 100px";

let img = document.createElement("img");
img.src = "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403";
img.style = "width: 100px";
divImg.appendChild(img);