function dataPerson(){
    let form = document.getElementById('form');
    let nama = form.nama.value;
    let pekerjaan = form.pekerjaan.value;
    let hobi = form.hobi.value;

    let input = 'Nama :  ' + nama + '<br>Pekerjaan :  ' + pekerjaan + `<br>Hobi :` + hobi;
    let no_input = 'Mohon Isi Semua Data Terlebih Dahulu';
    let hasil = (nama && pekerjaan && hobi) ? input : no_input;

    document.getElementById('hasil').innerHTML = hasil;

//lengkapi kode untuk menampilkan hasilnya pada html
//isian nama, pekerjaan dan hobi
}