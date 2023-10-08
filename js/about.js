// Fungsi untuk mengambil dan menampilkan data dari JSON
async function fetchData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Fancypedia/fancypedia-store/main/filejson/about.json'); // Ganti 'path/to/your/json/file.json' dengan path menuju file JSON Anda
        const data = await response.json();

        // Mengisi elemen HTML dengan data JSON
        document.getElementById('aboutFancypediaDescription').textContent = data.servicesInfo.aboutFancypedia.description;
        document.getElementById('themeDescription').textContent = data.servicesInfo.theme.description;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Memanggil fungsi fetchData untuk mengambil data JSON dan menampilkan ke dalam elemen HTML
fetchData();
