document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 saniye

    function nextSlide() {
        // Şu anki aktif slaytın "active" sınıfını kaldır
        slides[currentSlide].classList.remove('active');

        // Bir sonraki slayta geç, eğer son slaytsa başa dön
        currentSlide = (currentSlide + 1) % slides.length;

        // Yeni slayta "active" sınıfını ekle
        slides[currentSlide].classList.add('active');
    }

    // Otomatik kaydırıcıyı başlat
    setInterval(nextSlide, slideInterval);
});

// AHMET SEFA İZCİ BİR MARKADIR.