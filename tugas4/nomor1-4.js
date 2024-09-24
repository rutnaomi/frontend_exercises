function pesanMakanan(namaMakanan, waktuPembuatan) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${namaMakanan} sudah siap!`);
      }, waktuPembuatan);
    });
  }
  
  function antarMakanan(namaMakanan, waktuAntar) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${namaMakanan} sudah diantar!`);
        }, waktuAntar);
    });
}

function pesanDanAntarAllSettled(){
    const makanan1 = "Bakso";
    const makanan2 = "Rendang";

    const pesanBakso = pesanMakanan(makanan1, 2000).then((a) =>
        antarMakanan(makanan1, 1000)
    );
    const pesanRendang = pesanMakanan(makanan2, 3000).then((a) =>
        antarMakanan(makanan2, 1500)
    );

    Promise.allSettled([pesanBakso, pesanRendang]).then((results) => {
        results.forEach((result) =>{
            if(result.status === "fulfilled"){
                console.log("Sukses:", result.value);
            }else{
                console.log("Gagal:", result.reason);
            }
        });
    });
}

pesanDanAntarAllSettled();