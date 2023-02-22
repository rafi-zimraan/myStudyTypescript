// MANIPULASI ARRAY

// 1. MENAMBAH ISI ARRAY
let get: any = [];
get [0] = 'paijo'
get [1] = 'sukinem'
get [2] = 'painul'
get [3] = 'sukijo'
get [4] = 'parjiyem'
console.log( 'menambah ', get);

//  2. MENGHAPUS ISI ARRAY
let arr : any = [];
arr = ['akun', 'login', 'password']
arr [2] = undefined;
console.log( 'menghapus ', arr);

// MENAMPILKAN ISI ARRAY
let negara : any = [];
negara = ['belanda' , 'indonesia' , 'turky' , 'mekkah' , 'maddinah']

for (let i = 0; i < negara.length; i++) {
    console.log( 'negara ke-' +  (i +1) + ' = ' + negara)
    
}

// ARRAY MENTHOD
let makanan : any = [];
makanan =[ 'pizza' , 'sosis' , 'tayo'];
    console.log( makanan.join());
    