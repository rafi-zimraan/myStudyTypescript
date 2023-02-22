function hari (waktu) {
    return function (nama) {
        console.log( `Haii ${nama}, saatWaktu ${waktu} `);
    }
}
let saatWaktu = hari("pagi");
console.log(saatWaktu("RAFI"));