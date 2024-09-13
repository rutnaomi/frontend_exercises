
function hargaDiskon(harga, persentasiDiskon){
    const potonganDiskon = harga * persentasiDiskon;
    const hargaSetelahDiskon = harga - potonganDiskon;
    return hargaSetelahDiskon;
}

prompt(hargaDiskon(176, 50/100))