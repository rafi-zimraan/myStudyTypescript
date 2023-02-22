
// MENAMBAH  (CARA PERTAMA)
let food : any = [];
food = ['pizza' , 'nasi' , 'sambel' , 'bawang'];
food[4] = 'pizang';
console.log(food);

// MENTHOD PUSH (CARA KEDUA)
let taco : any = [];
taco = ['mayones' , 'saos' , 'sambel'];
taco.push('bunga' , 'combrang');
console.log(taco);

// MENDELETE  (CARA PERTAMA)
let boba : any = [];
boba = ['mayones' , 'saos' , 'sambel'];
boba.push('bunga' , 'combrang');
delete boba [2];
console.log(boba);

// MENTHOD POP (CARA KEDUA)
let m : any = [];
m = ['mayones' , 'saos' , 'sambel', 'meja', 'kursi'];
m.pop();
console.log(m);

// MENTHOD SHIFT (CARA KEDIGA)
let coco : any = [];
coco = ['mayones' , 'saos' , 'sambel'];
coco.push('bunga' , 'combrang');
coco.shift();
console.log(coco);

// MENTHOD SPLICE (CARA KE EMPAT)
let tayo : any = [];
tayo = ['mayones' , 'saos' , 'sambel'];
tayo.push('bunga' , 'combrang');
tayo.splice(3, 1);
console.log(tayo);

// MERUBAH ISI ARRAY
let java : any = [];
java = ['kotlin' , 'html' , 'css' , 'php' , 'mySQL' ];
java[5] = 'C++';
console.log(java);

// MENTHOD ARRAY FILTER
let angka : any =[12,23,13,35,46,345,89,24,24,35,57]
const filterArray = angka.filter((item : any) =>{
    return item < 50;
})
console.log('filter',filterArray);

//  INCLUDES ARRAY
let  sayuran : any = [];
sayuran = ['bayam', 'wortel', 'kangkung', 'kacang panjang', 'kobis', 'jagung', ]
let adaBunga = sayuran.includes('bunga');
console.log(adaBunga);
let adaWortel = sayuran.includes('wortel')
console.log(adaWortel);

// SORT ARRAY 
let bilangan : any = [];
bilangan = [5,7,6,0,9,1,2,8,3,4]
console.log(bilangan.sort());
let alfabet: any = [];
alfabet = ['a','w','d','k','b','l','c','g','p','v','u']
console.log(alfabet.sort());

// TANGGAL 16 KAMIS 2023.
// METHOD FILTER
const numberFilter = [1,2,5,7,3,];
// WHIT ARROW FUNCTION
let hasilAngka = numberFilter.filter((i : any) => i > 2)
// WHIT FUNCTION
// let hasilAngka = numberFilter.filter((mm:any) => {
//     return mm > 4
// })
console.log(`hasil dari filter : ${hasilAngka}`);

// MAP
let hasilAngka2 = hasilAngka.map((a :any) => a * 2 );
console.log(`hasil dati map : ${hasilAngka2}`);

// reduce
// TANPA KURUNG KURAWAL (hanya untuk satu perintah)
let hasilAngka3 = hasilAngka2.reduce(
    (akumulasi, nilaiSekarang) => akumulasi * nilaiSekarang
);

// MENGUNAKAN KURUNG KURAWAL (Untuk banyak perintah)
let hasilAngkA = hasilAngka2.reduce((akumulasi, nilaisekarang) => {
    return akumulasi + nilaisekarang;
}
)
console.log(`hasil dari reduce : ${hasilAngka3}`);

// METHOD CHAINING 
let angkaChaining = [2,6,9,7,4];
let gabung =
angka.filter((b : any) => b > 5 )
.map((q: number) => q * 2)
.reduce((s: number,d: number) => s + d);
console.log(`hasil dari method chaining : ${gabung}`);

