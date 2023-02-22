// percabangan
let umur :any = prompt("mulai")

if( umur > 2 && umur < 12 ) {
    console.log("anak-anak");
}
else if(umur > 13 && umur < 25) {
    console.log("remaja");
} 
else if(umur > 26 && umur < 30) {
    console.log("dewasa");
}else if(umur >= 65) {
    console.log("paruhbaya");
}