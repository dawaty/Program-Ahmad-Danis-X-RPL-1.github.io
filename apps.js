
var menu 

function pilihMenu() {

    const cHasil = document.getElementById("cetakHasil");
    cHasil.innerHTML = "";
    menu =document.getElementById("menu").value;
    
    console.log(menu);
    // Menyembunyikan div
    document.getElementById('persegiPanjang').style.display = 'none';
    document.getElementById('lingkaran').style.display = 'none';
    document.getElementById('segitiga').style.display = 'none';
    document.getElementById('kubus').style.display ='none';

    document.getElementById(menu).style.display = 'block';
}

function cetakHasilHitung(){

    if (menu=== "persegiPanjang"){  
    
        hitungLuasPersegiPanjang();
    
    }
    else if (menu=== "lingkaran"){

        hitungLingkaran(); 
    
    }else if (menu ==="segitiga"){

        hitungLuasSegitiga();
    }

    if (menu==="kubus"){
       
        hitungLuaskubus();
    }
}


function hitungLingkaran() {

    let jariJari = 0;
    let luas = 0;
    const pi = Math.PI;
    jariJari = document.getElementById("jariJari").value;
    luas = pi * jariJari * jariJari;
    const cHasil = document.getElementById("cetakHasil");

    cHasil.innerHTML = "Hasil menghitung luas linkaran dengan rumus PI X JariJari X JariJari <br>" +
    "</br> Jari Jari = "+ jariJari +
    "Luas = " + luas;
}

function hitungLuasPersegiPanjang() {
    let panjang = 0
    let lebar = 0;
    let luas = 0;

    panjang = document.getElementById("panjang").value;

    lebar = document.getElementById("lebar").value;

    luas = panjang * lebar;

    const cHasil = document.getElementById("cetakHasil");
    cHasil.innerHTML = "Hasil menghitung luas persegi panjang dengan rumus panjang X Lebar <br>" +
        "<br/>Panjang = " + panjang +
        "<br/>Lebar = " + lebar +
        "<br/>Hasil = "  + luas;
}   


function hitungLuasSegitiga() {   
    alas = document.getElementById("alas").value;
    tinggi = document.getElementById("tinggi").value;
    hasil = 1/2 *alas * tinggi;

    const cHasil = document.getElementById("cetakHasil");
    cHasil.innerHTML = "Hasil menghitung luas segitiga dengan rumus 0.5 x alas x tinggi <br>" +
        "<br/>Alas = " + alas +
        "<br/>Tinggi = " + tinggi +
        "<br/>Hasil = "  + hasil;
}

function hitungLuaskubus() {

    let sisi = 0;
    let luas = 0;
    sisi = document.getElementById("sisi").value;
    luas = 6 * sisi * sisi;
    console.log(luas);
    const cHasil = document.getElementById("cetakHasil");

    cHasil.innerHTML = "Hasil menghitung luas kubus dengan rumus 6 x sisi x sisi <br>" +
    "</br> sisi = "+ sisi +
    "Luas = " + luas;
}