
// Pengulangan for
for (let i = 10; i > 0; i--) {
    console.log
    ("Anak ke " + i + "<br>")
}

for (let a =0; a < 10; a++) {
    console.log
    (`${a} `)
}


for (let i = 4; i <= 60; i++) {
    if(i % 2 == 0)
    console.log(i);
    
    
}

// PENGULANGAN FOR
for (let y = 1; y <= 10; y++) {
    for(let x = 1; x <= 8; x++) {
        if( y == 5 || x == 8 || x == 1) {
            document.write(" * "); 
            if( x == 8 || y == 8 || x == 1) {
                document.write(" * ")
            }
        } else {
            document.write(" _ ");
        }
    }
    document.write("<br>");
}

// PENGULANGAN FOR
for (let a = 0; a <= 10; a++) {
    for (let i = 0; i <= 10; i++) {
        if( a == i || i + a == 10) {
            document.write(" * ")
        } else {
            document.write(" _ ")
        }
    }
    document.write(" <br> ")
}

let i = 0;
let ulang =prompt('anda ingin mengulang??')
// WHILE- DO
while (ulang) {
    ulang = prompt('anda ingin mengulang berapa kali bro!!')
}
alert("berapa anda" + i + "kali" )

// DO - WHILE 
do {
    ulang = prompt("anda ingin menyoba berapa kali")
    i++;
} while (ulang);
alert("anda mengulang" + i + "kali")

// Penggulangan if/else 
let angka1 : any = ('masukkan bilangan : ')
if (angka % 2 == 0) {
    alert('bilangan genap');
} else {
    alert('bilangan ganjil');
}
console.log(angka);

