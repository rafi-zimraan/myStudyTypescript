let getBiodata : any = prompt ("City Tour");
let password : any = prompt ( "ganteng");


// UNTUK CARA SIMPLE
if(getBiodata === "City Tour" && password === "ganteng") {
    document.writeln("selamat datang");
}else {
    document.writeln("password tidak terdaftar");
}

// UNTUK CARA YANG LEBIH LENGKAP
if(getBiodata === "City Tour") {
    if(password === "ganteng"){
        document.writeln("selamat datang");
    }else {
        document.writeln("paswword anda salah");
    }
}else {
    document.writeln("password tidak terdaftar");
}


let hasilUndian : any = prompt("selamat anda mendapat hadiah ,silahkan pilih diantara 1-5");
let hadiah : string = "";
switch (hasilUndian) {
    case "1" :
    hadiah = "paket umroh";
    break;
    case "2" :
        hadiah = "bapartemen";
        case "3" :
            hadiah = "rumah";
            break;
            case "4" :
                hadiah = "berangkat haji";
                break;
                case "5" :
                    hadiah = "selamat anda umruh + haji";
                    break;
                    default:
                    document.writeln("anda salah memilih");
}
if (hadiah == "" ) {
    document.writeln("kamu gagal")
} else {
    document.writeln("kamu mendapat " + hadiah);
}