"use strict";
let getNilai = prompt("input nilai :");
let hasil = "";
switch (getNilai) {
    case "A":
        hasil = "90";
        break;
    case "B+":
        hasil = "80";
        break;
    case "B":
        hasil = "70";
        break;
    case "C":
        hasil = "60";
        break;
    case "D":
        hasil = "50";
        break;
    default:
        document.writeln("anda salah memilih");
}
if (hasil == "") {
    document.writeln("anda gagal");
}
else {
    document.writeln("anda mendapat = " + hasil);
}
