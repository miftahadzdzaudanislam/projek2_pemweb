function reg() {
  let NIM = document.getElementById("NIM").value;
  let Nama = document.getElementById("Nama").value;
  let NoPol = document.getElementById("Nopol").value;
  let Merek = document.getElementById("Merek").value;

  document.getElementById("NIM").style.borderColor = "";
  document.getElementById("Nama").style.borderColor = "";
  document.getElementById("Nopol").style.borderColor = "";
  document.getElementById("Merek").style.borderColor = "";

  let errorNIM = "";
  let errorNama = "";
  let errorNoPol = "";
  let errorMerek = "";

  if (NIM == "") {
    errorNIM = "Isi NIM Anda";
    document.getElementById("NIM").style.borderColor = "red";
  }
  if (Nama == "") {
    errorNama = "Isi Nama Lengkap Anda";
    document.getElementById("Nama").style.borderColor = "red";
  }
  if (NoPol == "") {
    errorNoPol = "Isi NoPol Anda";
    document.getElementById("Nopol").style.borderColor = "red";
  }
  if (Merek == "") {
    errorMerek = "Isi Merek kendaraan Anda";
    document.getElementById("Merek").style.borderColor = "red";
  }

  document.getElementById("errorNIM").innerHTML = errorNIM;
  document.getElementById("errorNama").innerHTML = errorNama;
  document.getElementById("errorNopol").innerHTML = errorNoPol;
  document.getElementById("errorMerek").innerHTML = errorMerek;
}