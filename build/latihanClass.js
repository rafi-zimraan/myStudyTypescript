"use strict";
class laptop {
    namaLaptop = "lenovo adipad 123";
    seri = 123;
    jenis = true;
    harga = 1000000;
    berdagang() {
        console.log(`Dengan nama ${this.namaLaptop} dengan harga ${this.harga} dan dengan jenis ${this.jenis}`);
    }
}
const jmlLaptop = new laptop();
jmlLaptop.namaLaptop = "acer";
jmlLaptop.harga = 23000000;
console.log(jmlLaptop);
class prodi {
    nama;
    devisi;
    constructor(nama, devisi) {
        this.nama = nama;
        this.devisi = devisi;
    }
}
const mobile = new prodi("wijaya", "mobileDeveloper");
const frontEnd = new prodi("paineem", "frontendDeveloper");
const backEnd = new prodi("paijo", "backendDeveloper");
console.log("latihan", mobile, frontEnd, backEnd);
class santri {
    nama = "zimbabwe";
    umur = 23;
    jurusan = "mobile";
    constructor() { }
}
class santri2 extends santri {
    pondok() {
        console.log(`nama santri ${this.nama} dengan umur ${this.umur} jurusan ${this.jurusan} developer`);
    }
}
let jmlPondok = new santri2().pondok();
