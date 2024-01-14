function log(){
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    document.getElementById('username').style.borderColor = '';
    document.getElementById('password').style.borderColor = '';

    let erroruser = '';
    let errorpass = '';

    if (user == ''){
        erroruser = 'Isi Username Anda';
        document.getElementById('username').style.borderColor = 'red'
    }if (pass == ''){
        errorpass = 'Isi Password Anda';
        document.getElementById('password').style.borderColor = 'red';
    }

    document.getElementById('erroruser').innerHTML = erroruser;
    document.getElementById('errorpass').innerHTML = errorpass;
}

function lupa(){
    let email = document.getElementById('email').value;

    document.getElementById('email').style.borderColor = '';

    let erroremail = '';

    if (email == ''){
        erroremail = 'Isi Email Anda';
        document.getElementById('email').style.borderColor = 'red'
    }else if (email.indexOf("@") == -1) {
        erroremail = "Email harus ada karakter '@'";
        document.getElementById('email').style.borderColor = 'red'
      }

    document.getElementById('erroremail').innerHTML = erroremail;
}

function pulih(){
    let passbaru = document.getElementById('baru').value;
    let konvpass = document.getElementById('konvirmasi').value;

    document.getElementById('baru').style.borderColor = '';
    document.getElementById('konvirmasi').style.borderColor = '';

    let errorbaru = '';
    let errorkonv = '';

    if (passbaru == ''){
        errorbaru = 'Isi Password Baru';
        document.getElementById('baru').style.borderColor = 'red';
    }if (konvpass == ''){
        errorkonv = 'Konvirmasi Password Baru'
        document.getElementById('konvirmasi').style.borderColor = 'red';
    }else if (konvpass != passbaru){
        errorbaru = 'Harus Sama dengan Password Baru';
        document.getElementById('konvirmasi').style.borderColor = 'red';
    }

    document.getElementById('errorbaru').innerHTML = errorbaru;
    document.getElementById('errorkonv').innerHTML = errorkonv;
}