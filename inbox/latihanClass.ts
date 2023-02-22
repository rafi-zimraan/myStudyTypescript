
// // SOAL CLASS
// class laptop {
//     namaLaptop : string = "lenovo adipad 123";
//     seri : number = 123;
//     jenis : boolean = true;
//     harga : number = 1000000 
    
//     berdagang() {
//         console.log(`Dengan nama ${this.namaLaptop} dengan harga ${this.harga} dan dengan jenis ${this.jenis}`);
        
//     }
// }

// // LATIHAN
// class prodi {
//     nama : string;
//     devisi : string;
//     constructor(nama :string , devisi : string) {
//         this.nama = nama;
//         this.devisi = devisi;
//     }
// }
// const mobile = new prodi("wijaya" ,"mobileDeveloper");
// const frontEnd = new prodi("paineem" ,"frontendDeveloper");
// const backEnd = new prodi("paijo" ,"backendDeveloper");
// console.log("latihan",mobile,frontEnd,backEnd);
// const jmlLaptop = new laptop();
// jmlLaptop.namaLaptop = "acer"
// jmlLaptop.harga = 23000000
// console.log(jmlLaptop);

// inheritance
class santri {
    nama : string = "zimbabwe";
    umur : number = 23;
    jurusan :string = "mobile";
    constructor() {}
}

class santri2 extends santri {
    pondok() {
        console.log(`nama santri ${this.nama} dengan umur ${this.umur} jurusan ${this.jurusan} developer`);
        
    }
}
let jmlPondok = new santri2().pondok();
// console.log(jmlPondok);









