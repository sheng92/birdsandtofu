const figures = document.querySelectorAll('.post__image img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox__img');
const closeBtn = lightbox.querySelector('.lightbox__close');

// Add click listener to each image
figures.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Optional: close on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        lightbox.style.display = 'none';
    }
});