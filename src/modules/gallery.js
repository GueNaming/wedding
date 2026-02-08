// Gallery Module - Synchronized Slider & Lightbox
export function initGallery() {
    console.log('🖼️ Gallery initialized')

    const slider = document.getElementById('mainSlider')
    const sliderCount = document.getElementById('sliderCount')
    const thumbGrid = document.getElementById('thumbGrid')
    const viewAllBtn = document.getElementById('viewAllBtn')

    const lightbox = document.getElementById('lightbox')
    const lightboxImg = document.getElementById('lightboxImg')
    const lightboxClose = document.getElementById('lightboxClose')
    const lightboxPrev = document.getElementById('lightboxPrev')
    const lightboxNext = document.getElementById('lightboxNext')

    if (!slider) return

    const slides = Array.from(slider.querySelectorAll('.main-slide'))
    const thumbs = Array.from(thumbGrid?.querySelectorAll('.thumb-item') || [])
    const images = slides.map(s => s.querySelector('img')?.src)
    let currentIndex = 0
    const total = slides.length

    // --- SLIDER LOGIC ---
    function updateGallery(index) {
        currentIndex = index

        // Update Slider
        slider.style.transform = `translateX(-${currentIndex * 100}%)`

        // Update Counter
        if (sliderCount) sliderCount.innerText = `${currentIndex + 1} / ${total}`

        // Update Thumbnails
        thumbs.forEach((thumb, i) => {
            if (i === currentIndex) {
                thumb.classList.add('active')
                // Scroll thumbnail into view
                thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
            } else {
                thumb.classList.remove('active')
            }
        })

        // Update Lightbox image if active
        if (lightbox && lightbox.classList.contains('active')) {
            lightboxImg.src = images[currentIndex]
        }
    }

    // Thumbnail Click
    thumbs.forEach((thumb, i) => {
        thumb.addEventListener('click', () => updateGallery(i))
    })

    // Swipe Support for Main Slider
    let startX = 0
    slider.addEventListener('touchstart', (e) => startX = e.touches[0].clientX)
    slider.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX
        const diff = startX - endX

        if (Math.abs(diff) > 50) {
            if (diff > 0) { // Next
                updateGallery((currentIndex + 1) % total)
            } else { // Prev
                updateGallery((currentIndex - 1 + total) % total)
            }
        }
    })

    // --- LIGHTBOX LOGIC ---
    function openLightbox(index) {
        if (!lightbox || !lightboxImg) return
        currentIndex = index
        lightboxImg.src = images[currentIndex]
        lightbox.classList.add('active')
        document.body.style.overflow = 'hidden'
    }

    function closeLightbox() {
        if (!lightbox) return
        lightbox.classList.remove('active')
        document.body.style.overflow = ''
    }

    function nextImage() {
        updateGallery((currentIndex + 1) % total)
    }

    function prevImage() {
        updateGallery((currentIndex - 1 + total) % total)
    }

    // Open lightbox from main slide
    slides.forEach((slide, i) => {
        slide.addEventListener('click', () => openLightbox(i))
    })

    // View All Button
    viewAllBtn?.addEventListener('click', () => openLightbox(0))

    lightboxClose?.addEventListener('click', closeLightbox)
    lightboxPrev?.addEventListener('click', (e) => {
        e.stopPropagation()
        prevImage()
    })
    lightboxNext?.addEventListener('click', (e) => {
        e.stopPropagation()
        nextImage()
    })

    lightbox?.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox()
    })

    // Key Support
    document.addEventListener('keydown', (e) => {
        if (!lightbox || !lightbox.classList.contains('active')) return
        if (e.key === 'Escape') closeLightbox()
        if (e.key === 'ArrowRight') nextImage()
        if (e.key === 'ArrowLeft') prevImage()
    })
}
