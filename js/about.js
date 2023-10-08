// Mengambil data dari file JSON menggunakan fetch
fetch('../filejson/about.json') // Ganti 'data.json' dengan path ke file JSON Anda
.then(response => {
  // Periksa apakah responsenya sukses
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  // Parse responsenya sebagai JSON
  return response.json();
})
.then(data => {
  // Mengisi elemen HTML dengan data JSON
  document.getElementById('aboutFancypediaDescription').textContent = data.servicesInfo.aboutFancypedia.description;
  document.getElementById('themeDescription').textContent = data.servicesInfo.theme.description;
})
.catch(error => {
  // Tangani kesalahan jika ada
  console.error('Error:', error);
});