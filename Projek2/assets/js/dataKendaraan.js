function showPopup(rowNumber) {
    let NomorPolisi = document.getElementById(`NomorPolisi${rowNumber}`).innerText;
    let Merk = document.getElementById(`Merk${rowNumber}`).innerText;
    let Pemilik = document.getElementById(`Pemilik${rowNumber}`).innerText;
    let Status = document.getElementById(`Status${rowNumber}`).innerText;

    // Mengisi data pada form
    document.getElementById('editNomorPolisi').value = NomorPolisi;
    document.getElementById('editMerk').value = Merk;
    document.getElementById('editPemilik').value = Pemilik;
    document.getElementById('editStatus').value = Status;

    document.getElementById('popup').setAttribute('data-row', rowNumber);

    // Menampilkan modul pop-up
    document.getElementById('popup').style.display = 'flex';
  }

  function hidePopup() {
    // Menyembunyikan modul pop-up
    document.getElementById('popup').style.display = 'none';

  }

  function simpanPerubahan() {
// Dapatkan nilai yang diisi oleh pengguna
let editNomorPolisi = document.getElementById('editNomorPolisi').value;
let editMerk = document.getElementById('editMerk').value;
let editPemilik = document.getElementById('editPemilik').value;
let editStatus = document.getElementById('editStatus').value;

// Dapatkan nomor baris yang sedang diedit
let rowNumber = parseInt(document.querySelector('#popup').getAttribute('data-row'));

// Perbarui nilai di tabel
let NomorPolisiCell = document.getElementById(`NomorPolisi${rowNumber}`);
let MerkCell = document.getElementById(`Merk${rowNumber}`);
let PemilikCell = document.getElementById(`Pemilik${rowNumber}`);
let StatusCell = document.getElementById(`Status${rowNumber}`);

NomorPolisiCell.innerText = editNomorPolisi;
MerkCell.innerText = editMerk;
PemilikCell.innerText = editPemilik;
StatusCell.innerText = editStatus;

// Sembunyikan modul pop-up setelah operasi selesai
hidePopup();
}


function resetData(rowNumber) {
// Mengreset isi inputan di modal pop-up
document.getElementById('editNomorPolisi').value = '';
document.getElementById('editMerk').value = '';
document.getElementById('editPemilik').value = '';
document.getElementById('editStatus').value = '';

// Panggil kembali fungsi showPopup untuk menampilkan modal pop-up
showPopup(rowNumber);
}