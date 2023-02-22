"use strict";
function MenghitungBilanganGenap(a, b) {
    let JmlNilaiB;
    let jmlNilaiA;
    let gabung;
    jmlNilaiA = a * a * a;
    JmlNilaiB = b * b * b;
    gabung = JmlNilaiB + jmlNilaiA;
    return gabung;
}
console.log(MenghitungBilanganGenap(2, 2));
