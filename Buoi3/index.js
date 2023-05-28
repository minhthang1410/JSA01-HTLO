function check_leap_year(year) {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        console.log(year + " is leap year !");
    } else {
        console.log(year + " isn't leap year !");
    }
}

function classify_triangle(a, b, c) {
    let sum = a + b + c;
    if (sum == 180) {
        if (a > 90 || b > 90 || c > 90) {
            console.log("Tam giác tù");
        } else if (a < 90 && b < 90 && c < 90 && a != b && a != c) {
            console.log("Tam giác nhọn");
        } else if (a == 90 || b == 90 || c == 90) {
            console.log("Tam giác vuông");
        } else {
            console.log("Tam giác đều");
        }
    } else {
        console.log("Tam giác không hợp lệ");
    }
}

function rectangle(width, heigh) {
    let p = (width + heigh) * 2;
    let s = width * heigh;
    console.log("Chu vi = " + p);
    console.log("Diện tích = " + s);
}

function circle(radius) {
    const pi = 3.14;
    let C = radius * 2 * pi;
    let S = radius * radius * pi;
    let D = radius * 2;
    console.log("Chu vi = " + C);
    console.log("Diện tích = " + S);
    console.log("Đường kính = " + D);
}

circle(3.5);