// Deklarasi Variabel
// Gunakan 'const' untuk nilai yang tidak akan berubah
const EMAIL_MAHASISWA = "mahasiswa.contoh@universitas.ac.id"; // Email sebagai konstanta

// Gunakan 'let' untuk nilai yang bisa berubah
let namaMahasiswa = "Budi Santoso";
let prodiMahasiswa = "Teknik Informatika";
let fakultasMahasiswa = "Teknik";

// 'var' (digunakan untuk mendemonstrasikan scope jika diperlukan, tapi 'let' lebih direkomendasikan)
var statusMahasiswa = "Aktif"; // Contoh penggunaan var

// Fungsi untuk menampilkan nilai awal ke HTML
function tampilkanProfilAwal() {
    document.getElementById("namaMahasiswa").textContent = namaMahasiswa;
    document.getElementById("prodiMahasiswa").textContent = prodiMahasiswa;
    document.getElementById("Fakultas").textContent = fakultasMahasiswa; // Perbaiki ID di HTML dari 'Fakultas' menjadi 'fakultasMahasiswa' atau sesuaikan di JS
    document.getElementById("statusMahasiswa").textContent = statusMahasiswa;
    document.getElementById("emailMahasiswa").textContent = EMAIL_MAHASISWA;

    console.log("--- Profil Awal ---");
    console.log("Nama (let):", namaMahasiswa);
    console.log("Prodi (let):", prodiMahasiswa);
    console.log("Fakultas (let):", fakultasMahasiswa);
    console.log("Status (var):", statusMahasiswa);
    console.log("Email (const):", EMAIL_MAHASISWA);
}

// Fungsi untuk mengubah Nama Mahasiswa
function ubahNama() {
    namaMahasiswa = "Siti Aminah"; // Nilai baru untuk nama
    document.getElementById("namaMahasiswa").textContent = namaMahasiswa;
    console.log("\n--- Setelah Ubah Nama ---");
    console.log("Nama baru:", namaMahasiswa);
}

// Fungsi untuk mengubah Prodi Mahasiswa
function UbahProdi() { // Perhatikan penulisan nama fungsi sesuai di HTML
    prodiMahasiswa = "Sistem Informasi"; // Nilai baru untuk prodi
    document.getElementById("prodiMahasiswa").textContent = prodiMahasiswa;
    console.log("\n--- Setelah Ubah Prodi ---");
    console.log("Prodi baru:", prodiMahasiswa);
}

// Fungsi untuk mengubah Fakultas
function ubahFakultas() {
    fakultasMahasiswa = "Ilmu Komputer"; // Nilai baru untuk fakultas
    document.getElementById("Fakultas").textContent = fakultasMahasiswa; // Pastikan ID di HTML cocok
    console.log("\n--- Setelah Ubah Fakultas ---");
    console.log("Fakultas baru:", fakultasMahasiswa);
}

// Fungsi untuk mencoba mengubah Email (akan error karena 'const')
function ubahEmail() { // Perhatikan penulisan nama fungsi sesuai di HTML
    try {
        // Coba mengubah variabel const - ini akan menghasilkan error!
        // EMAIL_MAHASISWA = "email.baru@universitas.ac.id";
        console.log("\n--- Coba Ubah Email (const) ---");
        document.getElementById("emailMahasiswa").textContent = "Tidak bisa diubah!";
        console.error("Error: Variabel 'EMAIL_MAHASISWA' adalah konstanta dan tidak bisa diubah.");
        alert("Email tidak bisa diubah karena telah dideklarasikan sebagai konstanta (const)!");
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
        alert("Terjadi kesalahan saat mencoba mengubah email: " + error.message);
    }
}

// Panggil fungsi untuk menampilkan profil awal saat halaman dimuat
document.addEventListener("DOMContentLoaded", tampilkanProfilAwal);