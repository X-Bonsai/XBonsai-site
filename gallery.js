document.addEventListener('DOMContentLoaded', (event) => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.getElementsByClassName('close')[0];
    const galleryItems = document.querySelectorAll('.gallery-thumbnail');

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
        });
    });

    close.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});