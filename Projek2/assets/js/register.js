function reg() {
  let nama = document.getElementById("nama").value;
  let asal = document.getElementById("asal").value;
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let cpass = document.getElementById("cpassword").value;

  document.getElementById("nama").style.borderColor = "";
  document.getElementById("asal").style.borderColor = "";
  document.getElementById("username").style.borderColor = "";
  document.getElementById("password").style.borderColor = "";
  document.getElementById("cpassword").style.borderColor = "";

  let errornama = "";
  let errorasal = "";
  let erroruser = "";
  let errorpass = "";
  let errorcpass = "";

  if (nama == "") {
    errornama = "Isi Nama Lengkap Anda";
    document.getElementById("nama").style.borderColor = "red";
  }
  if (asal == "") {
    errorasal = "Isi Asal Prodi Anda";
    document.getElementById("asal").style.borderColor = "red";
  }
  if (user == "") {
    erroruser = "Isi Username Anda";
    document.getElementById("username").style.borderColor = "red";
  }
  if (pass == "") {
    errorpass = "Isi Password Anda";
    document.getElementById("password").style.borderColor = "red";
  }
  if (cpass != pass) {
    errorcpass = "Password Tidak Cocok";
    document.getElementById("cpassword").style.borderColor = "red";
  }

  document.getElementById("errornama").innerHTML = errornama;
  document.getElementById("errorasal").innerHTML = errorasal;
  document.getElementById("erroruser").innerHTML = erroruser;
  document.getElementById("errorpass").innerHTML = errorpass;
  document.getElementById("errorcpass").innerHTML = errorcpass;
}