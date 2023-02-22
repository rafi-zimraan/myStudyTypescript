"use strict";
let get = [];
get[0] = 'paijo';
get[1] = 'sukinem';
get[2] = 'painul';
get[3] = 'sukijo';
get[4] = 'parjiyem';
console.log('menambah ', get);
let arr = [];
arr = ['akun', 'login', 'password'];
arr[2] = undefined;
console.log('menghapus ', arr);
let negara = [];
negara = ['belanda', 'indonesia', 'turky', 'mekkah', 'maddinah'];
for (let i = 0; i < negara.length; i++) {
    console.log('negara ke-' + (i + 1) + ' = ' + negara);
}
let makanan = [];
makanan = ['pizza', 'sosis', 'tayo'];
console.log(makanan.join());
