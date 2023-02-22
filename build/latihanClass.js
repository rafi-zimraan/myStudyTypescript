"use strict";
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
