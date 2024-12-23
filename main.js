const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Menambahkan event listener pada tombol hamburger
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active'); // Toggle kelas 'active' pada menu
});

// Menutup menu saat diklik di luar navbar
document.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar') && menu.classList.contains('active')) {
        menu.classList.remove('active'); // Menghapus kelas 'active' untuk menutup menu
    }
});
function btn(){
    window.location.href = "https://taplink.cc/mediaofficialmuhammadfitra49"
}
const data = new Date().getFullYear()
const tahun = document.getElementById('tahun')
tahun.innerHTML = data

// contoh 
// var da = prompt("masukan nama mu untuk login","");
// alert(`selamat datang ${da} ke website kelas kami`)