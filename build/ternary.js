"use strict";
let usia = 27;
function hasilUmur() {
    if (usia > 1 && usia < 10) {
        console.log('kamu masih kecil');
    }
    else if (usia > 11 && usia < 18) {
        console.log('remaja');
    }
    else if (usia > 19 && usia < 30) {
        console.log('sudah menikah');
    }
    else if (usia > 35 && usia < 45) {
        console.log('sudah pensiun');
    }
    else if (usia > 50 && usia < 90) {
        console.log("sudah hampir mati");
    }
}
console.log(usia);
hasilUmur();
