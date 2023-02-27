
// FUNCTION BIASA (CARA PERTAMA)
function myFunction (a: number ,b : number) {
    return a + b
}
// myFunction(10,20);
console.log(myFunction(10,10));

// FUNCTION EKSPERI (CARA KEDUA)
const fungsi = function() {
    console.log("haii");
    
}
fungsi();

// DENGAN TANDA PANAH (CARA KETIGA)
let getFungsi = () => console.log("Start and Do It Now");
getFungsi();


// LATIHAN PERSIGI PANJANG
function Mypersegi (p: 40, l: 4) {
    return p * l;
} 
console.log(Mypersegi(40,4));



// CARA MENGUNAKAN FUNCTION ARROW
function MenghitungBilanganGenap(a : number, b : number) {

    let JmlNilaiB;
    let jmlNilaiA;
    let gabung;

    jmlNilaiA = a * a * a;
    JmlNilaiB = b * b * b;    
    gabung = JmlNilaiB + jmlNilaiA;
    return gabung;
}
console.log(MenghitungBilanganGenap(2 , 2));



