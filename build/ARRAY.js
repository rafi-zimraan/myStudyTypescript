"use strict";
let food = [];
food = ['pizza', 'nasi', 'sambel', 'bawang'];
food[4] = 'pizang';
console.log(food);
let taco = [];
taco = ['mayones', 'saos', 'sambel'];
taco.push('bunga', 'combrang');
console.log(taco);
let boba = [];
boba = ['mayones', 'saos', 'sambel'];
boba.push('bunga', 'combrang');
delete boba[2];
console.log(boba);
let m = [];
m = ['mayones', 'saos', 'sambel', 'meja', 'kursi'];
m.pop();
console.log(m);
let coco = [];
coco = ['mayones', 'saos', 'sambel'];
coco.push('bunga', 'combrang');
coco.shift();
console.log(coco);
let tayo = [];
tayo = ['mayones', 'saos', 'sambel'];
tayo.push('bunga', 'combrang');
tayo.splice(3, 1);
console.log(tayo);
let java = [];
java = ['kotlin', 'html', 'css', 'php', 'mySQL'];
java[5] = 'C++';
console.log(java);
let angka = [12, 23, 13, 35, 46, 345, 89, 24, 24, 35, 57];
const filterArray = angka.filter((item) => {
    return item < 50;
});
console.log('filter', filterArray);
let sayuran = [];
sayuran = ['bayam', 'wortel', 'kangkung', 'kacang panjang', 'kobis', 'jagung',];
let adaBunga = sayuran.includes('bunga');
console.log(adaBunga);
let adaWortel = sayuran.includes('wortel');
console.log(adaWortel);
let bilangan = [];
bilangan = [5, 7, 6, 0, 9, 1, 2, 8, 3, 4];
console.log(bilangan.sort());
let alfabet = [];
alfabet = ['a', 'w', 'd', 'k', 'b', 'l', 'c', 'g', 'p', 'v', 'u'];
console.log(alfabet.sort());
const numberFilter = [1, 2, 5, 7, 3,];
let hasilAngka = numberFilter.filter((i) => i > 2);
console.log(`hasil dari filter : ${hasilAngka}`);
let hasilAngka2 = hasilAngka.map((a) => a * 2);
console.log(`hasil dati map : ${hasilAngka2}`);
let hasilAngka3 = hasilAngka2.reduce((akumulasi, nilaiSekarang) => akumulasi * nilaiSekarang);
let hasilAngkA = hasilAngka2.reduce((akumulasi, nilaisekarang) => {
    return akumulasi + nilaisekarang;
});
console.log(`hasil dari reduce : ${hasilAngka3}`);
let angkaChaining = [2, 6, 9, 7, 4];
let gabung = angka.filter((b) => b > 5)
    .map((q) => q * 2)
    .reduce((s, d) => s + d);
console.log(`hasil dari method chaining : ${gabung}`);
