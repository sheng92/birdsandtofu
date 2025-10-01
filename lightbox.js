document.addEventListener("DOMContentLoaded", () => {
    const figures = document.querySelectorAll('.post__image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox__img');
    const lightboxCaption = lightbox.querySelector('.lightbox__caption');
    const closeBtn = lightbox.querySelector('.lightbox__close');
    const prevBtn = lightbox.querySelector('.lightbox__prev');
    const nextBtn = lightbox.querySelector('.lightbox__next');

    let currentIndex = -1;

    // Open lightbox
    figures.forEach((figure, index) => {
        const img = figure.querySelector('img');
        img.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
            lightbox.classList.add('show');
        });
    });

    // Show image + caption
    function showImage(index) {
        const figure = figures[index];
        const img = figure.querySelector('img');
        const caption = figure.querySelector('figcaption');

        lightboxImg.style.opacity = 0;
        setTimeout(() => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxCaption.textContent = caption ? caption.textContent : "";
            lightboxImg.style.opacity = 1;
        }, 200);
    }

    // Navigation
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + figures.length) % figures.length;
        showImage(currentIndex);
    });
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % figures.length;
        showImage(currentIndex);
    });

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('show');
        setTimeout(() => {
            lightboxImg.src = "";
            lightboxCaption.textContent = "";
            currentIndex = -1;
        }, 300);
    }

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('show')) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") prevBtn.click();
        if (e.key === "ArrowRight") nextBtn.click();
    });
});