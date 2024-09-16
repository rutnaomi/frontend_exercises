const mobil = [
    {
        no_plat: "DN 3324 YY",
        nama: "Xenia",
        brand: "Daihatsu",
        warna: ["Hitam", "Putih"],
        bahan_bakar: ["Bensin", "Solar"],
        maksimal_penumpang: 7
    },
    {
        no_plat: "K 8711 ZY",
        nama: "Avanza",
        brand: "Toyota",
        warna: ["Silver", "Putih"],
        bahan_bakar: ["Bensin", "Solar"],
        maksimal_penumpang: 7
    },
    {
        no_plat: "D 1896 XY",
        nama: "Xpander",
        brand: "Mitsubishi",
        warna: ["Hitam", "silver"],
        bahan_bakar: ["Bensin"],
        maksimal_penumpang: 7
    },
    {
        no_plat: "BK 2565 JR",
        nama: "Kijang Inova",
        brand: "Toyota",
        warna: ["Hitam", "Putih", "Abu-abu"],
        bahan_bakar: ["Bensin", "Diesel"],
        maksimal_penumpang: 7
    },
    {
        no_plat: "DK 8094 MN",
        nama: "Pajero",
        brand: "Mitsubishi",
        warna: ["Hitam", "Putih"],
        bahan_bakar: ["Diesel"],
        maksimal_penumpang: 7
    }
];

const listElement = document.getElementById('mobil-list');

mobil.forEach(m => {
    const warnaOutput = m.warna.length === 2 ? m.warna.join(" dan ") : m.warna.join(", ");
    const bahanBakarOutput = m.bahan_bakar.length === 2 ? m.bahan_bakar.join(" dan ") : m.bahan_bakar.join(", ");
    
    listElement.innerHTML += `
        <li>
            <b>No Plat:</b> ${m.no_plat} <br>
            <b>Nama:</b> ${m.nama} <br>
            <b>Brand:</b> ${m.brand} <br>
            <b>Warna:</b> ${warnaOutput} <br>
            <b>Bahan Bakar:</b> ${bahanBakarOutput} <br>
            <b>Maksimal Penumpang:</b> ${m.maksimal_penumpang} <br>
            <hr>
        </li>
    `;
});