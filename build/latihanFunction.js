"use strict";
function hellow() {
    console.log("hellow");
}
hellow();
const getHellow = function () {
    console.log("hellow");
};
getHellow();
const helloArrow = () => {
    console.log("hello");
};
helloArrow();
function hellow1() {
    console.log('hellow1');
}
hellow();
let p = prompt('masukan Nilai');
let l = prompt('masukan nilai');
function arrow(p, l) {
    return p * l;
}
document.writeln(arrow(p, l));
const panjang = prompt('masukan angka');
const tinggi = prompt('masukan angka');
const lebar = prompt('masukan angka');
function volumeBalok(panjang, lebar, tinggi) {
    return panjang * lebar * tinggi;
}
alert(volumeBalok(panjang, lebar, tinggi));
