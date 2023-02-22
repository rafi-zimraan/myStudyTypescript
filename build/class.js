"use strict";
class fulan {
    getNama = "Singa";
    nomer = 1;
    mamalia = true;
    gabung() {
        console.log(`hewan ${this.getNama} sedang makan`);
    }
}
let binatangClass = new fulan();
binatangClass.getNama = " Beruang";
console.log(binatangClass);
class hewan {
    nama;
    umur;
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
}
let singa = new hewan("semut", 2);
console.log("cara pertama", singa);
class hewan2 {
    user;
    age;
    constructor(user, age) {
        this.user = user;
        this.age = age;
    }
}
const pondok = new hewan2("supardi", 26);
console.log("cara kedua", pondok);
class biodata {
    addres = "Suriname";
    ttl = 24;
    constructor() { }
}
class biodata2 extends biodata {
    nama = "julia";
}
console.log(new biodata2());
class car {
    nama;
    jenis;
    age;
    constructor(nama, jenis, age) {
        this.nama = nama;
        this.jenis = jenis;
        this.age = age;
    }
}
class civic extends car {
    id;
    constructor(nama, jenis, id, age) {
        super(nama, jenis, age);
        this.id = id;
    }
}
const gabungCar = new civic("toyota", "supra", 2024, "kamu tanya");
console.log(gabungCar);
