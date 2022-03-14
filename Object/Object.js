var dataSiswa = {
    namaDepan: "Mushlih",
    namaBelakang: "Almmubarak",
    umur: 17,
    lulus: true
}

console.log(dataSiswa.namaDepan + " " + dataSiswa.namaBelakang);
console.log(dataSiswa["umur"]);

var nilai = {
    akidah: 100,
    fikih: {
        pertama: 90,
        kedua: 100
    },
    hadis: [90, 95, 100]
}
console.log(nilai);
console.log(nilai.fikih.pertama);
console.log(nilai.fikih["kedua"]);

console.log(nilai.hadis[1]);

function data(namaSiswa, umurSiswa) {
    var data1 = {
        nama: namaSiswa,
        umur: umurSiswa
    }
    console.log("Nama saya" + " " + data1.nama + " " + "Umur saya" + " " + data1.umur);
}
data("Mushlih Almubarak", 17);
data("Hadziq", 10);