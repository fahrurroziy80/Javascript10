    const nilai_mahasiswa = [
            {
                nama: "siti",
                mk: [
                    { nama: "agama", nilai: { harian: 80, uts: 60, uas: 70 } },
                    { nama: "pemrograman", nilai: { harian: 10, uts: 80, uas: 70 } },
                    { nama: "pancasila", nilai: { harian: 10, uts: 60, uas: 70 } }
                ]
            },
            {
                nama: "ali",
                mk: [
                    { nama: "agama", nilai: { harian: 90, uts: 50, uas: 20 } },
                    { nama: "pemrograman", nilai: { harian: 80, uts: 80, uas: 100 } },
                    { nama: "pancasila", nilai: { harian: 60, uts: 90, uas: 80 } }
                ]
            },
            {
                nama: "budi",
                mk: [
                    { nama: "agama", nilai: { harian: 100, uts: 80, uas: 70 } },
                    { nama: "pemrograman", nilai: { harian: 100, uts: 80, uas: 90 } },
                    { nama: "pancasila", nilai: { harian: 100, uts: 70, uas: 80 } }
                ]
            }
        ];

        // Fungsi menghitung nilai akhir
        function hitungNilaiAkhir(nilai) {
            const harian = nilai.harian * 0.2;
            const uts = nilai.uts * 0.3;
            const uas = nilai.uas * 0.5;
            return harian + uts + uas;
        }

        // Fungsi menentukan grade
        function tentukanGrade(na) {
            if (na >= 80) return "A";
            else if (na >= 75) return "B+";
            else if (na >= 70) return "B";
            else if (na >= 60) return "C+";
            else if (na >= 50) return "C";
            else if (na >= 30) return "D";
            else return "E";
        }

        // Fungsi untuk membuat tabel
        function buatTabel() {
            const tabel = document.getElementById("tabelNilai").querySelector("tbody");

            nilai_mahasiswa.forEach(mahasiswa => {
                mahasiswa.mk.forEach(mataKuliah => {
                    const na = hitungNilaiAkhir(mataKuliah.nilai);
                    const grade = tentukanGrade(na);

                    // Membuat baris tabel
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${mahasiswa.nama}</td>
                        <td>${mataKuliah.nama}</td>
                        <td>${na.toFixed(2)}</td>
                        <td>${grade}</td>
                    `;
                    tabel.appendChild(row);
                });
            });
        }

        // Panggil fungsi untuk membuat tabel
        buatTabel();
    
