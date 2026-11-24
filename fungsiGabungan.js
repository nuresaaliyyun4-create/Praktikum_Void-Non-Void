// Non-Void: menghasilkan nilai
function kelilingPersegi(sisi) {
    return 4 * sisi
}

//void: menampilkan hasil
function cetakkeliling(sisi) {
    let hasil = kelilingPersegi(sisi)
    console.log('Persegi dengan sisi ' + sisi + ' memiliki keliling ' + hasil)
}

cetakkeliling(6)
cetakkeliling(10)