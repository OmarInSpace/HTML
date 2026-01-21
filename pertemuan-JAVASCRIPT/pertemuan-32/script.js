// console.error('ini adalah pesan error yang ditampilkan secara manual');

try {
    // kode yang berpotensi menimbulkan error
    let result = functionNull() // Memanggil fungsi yang tidak didefinisikan
} catch (error) {
    console.error('terjadi kesalahan:', + error.massage);
}

function greet2 ()  {
    alert("External JavaScript");
}