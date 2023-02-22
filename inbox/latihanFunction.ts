
// FUNCTION BIASA
function hellow() {
    console.log("hellow");
    
}
hellow();

// FUNCTION EXPRESION
const getHellow = function () {
    console.log("hellow");
    
}
getHellow();

// ARROW FUNCTION
const helloArrow = () => {
    console.log("hello");
    
}
helloArrow();


// FUNCTION BIASA
function hellow1() : void {
    console.log('hellow1');

}
hellow(); 

// FUNCTION PERSEGI
let p : any = prompt('masukan Nilai');
let l : any = prompt('masukan nilai');
function arrow(p: any ,l: any) : any  {
    return p * l ;
}
document.writeln(arrow(p,l));

// FUNNCTION BALOK
const panjang : any = prompt('masukan angka');
const tinggi : any = prompt('masukan angka');
const lebar : any = prompt('masukan angka');
function volumeBalok(panjang : number , lebar : number , tinggi : number) : any {
    return panjang * lebar * tinggi ;
    
}
alert(volumeBalok(panjang,lebar,tinggi))

// volume setigita
