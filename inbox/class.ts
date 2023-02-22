
//  DASAR CLASS
class fulan {
    getNama : string = "Singa";
    nomer : number = 1;
    mamalia : boolean = true;

    gabung () {
        console.log(`hewan ${this.getNama} sedang makan`);
        
    }
}

let binatangClass = new fulan();
binatangClass.getNama = " Beruang"
// cara mengunakan log
console.log(binatangClass);


// tanggal 20/2/20203
// CLASS
// CARA PERTAMA
class hewan {
    nama : string;
    umur : number;
    constructor(nama :string , umur : number) {
        this.nama = nama;
        this.umur = umur;
    }
}
let singa = new hewan("semut" ,2);
console.log("cara pertama",singa);

// CARA KEDUA
class hewan2 {
    constructor(public user :string,public age : number) {}
}
const pondok = new hewan2("supardi", 26);
console.log("cara kedua",pondok);

// INHERITANCE(PEWARISAN)
class biodata {
    addres : string = "Suriname";
    ttl : number = 24;
    constructor() {}
}
class biodata2 extends biodata {
    nama : string = "julia";
}
console.log(new biodata2());

//SUPER CONSTRUCTOR (MEMANGGIL PROPERTY DARI PERNTSNYA)
// PARENTS CLASS
class car {
    private nama: string;
    public jenis: string;
    protected age : string;
    constructor(nama : string, jenis : string, age: string) {
        this.nama = nama;
        this.jenis = jenis;
        this.age = age;
    }
}
// CHILD CLASS
class civic extends car {
    id : number;
    constructor(nama : string, jenis : string, id : number, age : string) {
        super(nama,jenis,age);
        this.id = id;
    }
}
const gabungCar = new civic("toyota", "supra", 2024, "tahun ini")
console.log(gabungCar);
























