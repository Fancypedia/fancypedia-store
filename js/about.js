// Fungsi untuk mengambil dan menampilkan data dari JSON
async function fetchData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Fancypedia/fancypedia-store/main/filejson/about.json'); // Ganti 'url_ke_file_json' dengan URL tempat file JSON Anda disimpan
        const data = await response.json();

        // Mengisi elemen HTML dengan data JSON
        document.getElementById('aboutFancypediaDescription').textContent = data.aboutFancypediaDescription;
        document.getElementById('themeDescription').textContent = data.themeDescription;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Memanggil fungsi fetchData untuk mengambil data JSON
fetchData();
