function showPopup(rowNumber) {
    let namaArea = document.getElementById(`namaArea${rowNumber}`).innerText;
    let kapasitas = document.getElementById(`kapasitas${rowNumber}`).innerText;
    let gedung = document.getElementById(`gedung${rowNumber}`).innerText;

    // Mengisi data pada form
    document.getElementById('editNamaArea').value = namaArea;
    document.getElementById('editKapasitas').value = kapasitas;
    document.getElementById('editGedung').value = gedung;

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
let editGedung = document.getElementById('editGedung').value;
let editNamaArea = document.getElementById('editNamaArea').value;
let editKapasitas = document.getElementById('editKapasitas').value;

// Dapatkan nomor baris yang sedang diedit
let rowNumber = parseInt(document.querySelector('#popup').getAttribute('data-row'));

// Perbarui nilai di tabel
let namaAreaCell = document.getElementById(`namaArea${rowNumber}`);
let kapasitasCell = document.getElementById(`kapasitas${rowNumber}`);
let gedungCell = document.getElementById(`gedung${rowNumber}`);

namaAreaCell.innerText = editNamaArea;
kapasitasCell.innerText = editKapasitas;
gedungCell.innerText = editGedung;

// Sembunyikan modul pop-up setelah operasi selesai
hidePopup();
}


function resetData(rowNumber) {
// Mengreset isi inputan di modal pop-up
document.getElementById('editNamaArea').value = '';
document.getElementById('editKapasitas').value = '';
document.getElementById('editGedung').value = '';

// Panggil kembali fungsi showPopup untuk menampilkan modal pop-up
showPopup(rowNumber);
}

$(function () {
  $('#example2').DataTable({
    "paging": true,
    "lengthChange": false,
    "searching": false,
    "ordering": true,
    "info": true,
    "autoWidth": false,
    "responsive": true,
  });
});