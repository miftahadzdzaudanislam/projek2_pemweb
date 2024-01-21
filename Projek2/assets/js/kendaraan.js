function reg() {
  let NIM = document.getElementById("NIM").value;
  let Nama = document.getElementById("Nama").value;
  let NoPol = document.getElementById("NoPol").value;
  let Merek = document.getElementById("Merek").value;

  document.getElementById("NIM").style.borderColor = "";
  document.getElementById("Nama").style.borderColor = "";
  document.getElementById("NoPol").style.borderColor = "";
  document.getElementById("Merek").style.borderColor = "";

  let errorNIM = "";
  let errorasal = "";
  let errorNoPol = "";
  let errorMerek = "";

  if (NIM == "") {
    errorNIM = "Isi Nama Lengkap Anda";
    document.getElementById("NIM").style.borderColor = "red";
  }
  if (Nama == "") {
    errorasal = "Isi Asal Prodi Anda";
    document.getElementById("asal").style.borderColor = "red";
  }
  if (NoPol == "") {
    errorNoPol = "Isi NoPol Anda";
    document.getElementById("NoPol").style.borderColor = "red";
  }
  if (Merek == "") {
    errorMerek = "Isi Merek kendaraan Anda";
    document.getElementById("Merek").style.borderColor = "red";
  }

  document.getElementById("errorNIM").innerHTML = errorNIM;
  document.getElementById("errorasal").innerHTML = errorasal;
  document.getElementById("erroruser").innerHTML = erroruser;
  document.getElementById("errorpass").innerHTML = errorpass;
  document.getElementById("errorcpass").innerHTML = errorcpass;
}
