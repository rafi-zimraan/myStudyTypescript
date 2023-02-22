"use strict";
for (let y = 1; y <= 10; y++) {
    for (let x = 1; x <= 8; x++) {
        if (y == 5 || x == 8 || x == 1) {
            document.write(" * ");
            if (x == 8 || y == 8 || x == 1) {
                document.write(" * ");
            }
        }
        else {
            document.write(" _ ");
        }
    }
    document.write("<br>");
}
for (let a = 0; a <= 10; a++) {
    for (let i = 0; i <= 10; i++) {
        if (a == i || i + a == 10) {
            document.write(" * ");
        }
        else {
            document.write(" _ ");
        }
    }
    document.write(" <br> ");
}
let i = 0;
let ulang = prompt('anda ingin mengulang??');
while (ulang) {
    ulang = prompt('anda ingin mengulang berapa kali bro!!');
}
alert("berapa anda" + i + "kali");
do {
    ulang = prompt("anda ingin menyoba berapa kali");
    i++;
} while (ulang);
alert("anda mengulang" + i + "kali");
let angka1 = ('masukkan bilangan : ');
if (angka % 2 == 0) {
    alert('bilangan genap');
}
else {
    alert('bilangan ganjil');
}
console.log(angka);
