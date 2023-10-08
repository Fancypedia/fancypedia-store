// Mendengarkan acara pengajuan formulir
document.querySelector('.custom-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan perilaku pengajuan formulir bawaan

    // Mengambil nilai dari formulir
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const company = document.getElementById('contact-company').value;
    const message = document.getElementById('contact-message').value;

    // Membuat objek data yang akan dikirim ke API
    const data = {
        name: name,
        email: email,
        company: company,
        message: message
    };

    // Mengirim permintaan POST ke API menggunakan Fetch API
    fetch('https://eox49ed2rdqqviy.m.pipedream.net', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json()) // Mengonversi respons ke JSON
    .then(data => {
        console.log('Sukses:', data);
        // Lakukan sesuatu setelah permintaan berhasil, misalnya menampilkan pesan sukses kepada pengguna
    })
    .catch(error => {
        console.error('Error:', error);
        // Lakukan sesuatu jika terjadi kesalahan, misalnya menampilkan pesan kesalahan kepada pengguna
    });
});
