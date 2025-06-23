
    function openLightbox(src) {
        document.getElementById("lightboxImage").src = src;
        document.getElementById("lightboxModal").classList.remove("hidden");
    }

    function closeLightbox() {
        document.getElementById("lightboxModal").classList.add("hidden");
    }

    // Close lightbox on ESC key
    window.addEventListener('keydown', function (e) {
        if (e.key === "Escape") closeLightbox();
    });
