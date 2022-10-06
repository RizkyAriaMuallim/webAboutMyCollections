// cari cara ubah image source menggunakan js
const dataKoleksi = {
    mobil: {
        58: "No.58 Honda Civic Type R (white)",
        84: "No.84 Lexus RC F Performance Package",
        78: "No.78 Nissan GT-R Nismo 2020 Model",
        51: "No.51 Toyota Crown Comfort Taxi",
        6: "No.6 Audi R8",
        33: "No.33 Volkswagen The Beetle"
    },
    deskripsi: {
        58: "Mobil keluaran tahun 2022 ini memiliki tampilan yang menarik seperti mobil balap, dan untuk harganya rata-rata dijual dengan harga Rp.50.000 hingga Rp.55.000",
        84: "Mobil keluaran tahun 2020 ini memiliki tampilan yang sangat sporty, elegan, dan mewah. Untuk harganya sendiri saya beli dengan harga Rp.74.000",
        78: "Mobil keluaran tahun 2020 ini memiliki desain yang bagus dan mirip seperti mobil-mobil balap di game. Untuk harganya, yaitu Rp.50.000",
        51: "Mobil keluaran tahun 2016 ini memang unik, karena ini taksi hahaha, dan kebetulan salah satu pintu dari mobil ini dapat dibuka. Untuk harganya, yaitu Rp.54.000",
        6: "Mobil keluaran tahun 2014 ini elegan seperti mobil-mobil lainnya yang saya punya, dan kebetulan saya pilih untuk koleksi. Untuk harganya, yaitu Rp.54.000",
        33: "Mobil keluaran tahun 2018 ini unik, karena mirip seperti mobil milik mr.bean, hahaha. Untuk harganya, yaitu Rp.75.000"
    }
};
function gantiData(name, desc, urlGambar) {
    document.querySelector('#namaMobil').innerText = name;
    document.querySelector('#penjelasan').innerText = desc;
    var ubahGambar = document.querySelector('#gambar');
    ubahGambar.setAttribute('src', urlGambar);
}
// Main
const allData = document.querySelectorAll('.data');
for (const data of allData){
    data.addEventListener('click', function (event) {
        const target = event.target;
        if (target.classList.contains('58')) {
            gantiData(dataKoleksi.mobil[58], dataKoleksi.deskripsi[58], './image/no58 civic.jpg');
        }
        if (target.classList.contains('84')) {
            gantiData(dataKoleksi.mobil[84], dataKoleksi.deskripsi[84], './image/no84 lexusRC.jpg');
        }
        if (target.classList.contains('78')) {
            gantiData(dataKoleksi.mobil[78], dataKoleksi.deskripsi[78], './image/no78 nissan.jpg')
        }
        if (target.classList.contains('51')) {
            gantiData(dataKoleksi.mobil[51], dataKoleksi.deskripsi[51], './image/no51 toyotaTaxi.jpg')
        }
        if (target.classList.contains('6')) {
            gantiData(dataKoleksi.mobil[6], dataKoleksi.deskripsi[6], './image/no6 audiR8.jpg')
        }
        if (target.classList.contains('33')) {
            gantiData(dataKoleksi.mobil[33], dataKoleksi.deskripsi[33], './image/no33 volkswagen.jpg')
        }
    })
}