document.addEventListener("DOMContentLoaded", () => {
    const figures = document.querySelectorAll('.post__image img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox__img');
    const closeBtn = lightbox.querySelector('.lightbox__close');

    figures.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            lightbox.style.display = 'none';
        }
    });
});