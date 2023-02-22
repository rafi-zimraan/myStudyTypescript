"use strict";
let hasilUndian = prompt("selamat anda mendapat hadiah ,silahkan pilih diantara 1-5");
let hadiah = "";
switch (hasilUndian) {
    case "1":
        hadiah = "paket umroh";
        break;
    case "2":
        hadiah = "bapartemen";
    case "3":
        hadiah = "rumah";
        break;
    case "4":
        hadiah = "berangkat haji";
        break;
    case "5":
        hadiah = "selamat anda umruh + haji";
        break;
    default:
        document.writeln("anda salah memilih");
}
if (hadiah == "") {
    document.writeln("kamu gagal");
}
else {
    document.writeln("kamu mendapat " + hadiah);
}
