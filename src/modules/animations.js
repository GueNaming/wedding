// Animations Module - Scroll Reveal & Floating Petals
export function initAnimations() {
    console.log('✨ Animations initialized')

    // 1. Scroll Reveal (Intersection Observer)
    const reveals = document.querySelectorAll('.reveal')

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
            }
        })
    }, { threshold: 0.1 })

    reveals.forEach(el => revealObserver.observe(el))

    // 2. Floating Petals
    initPetals()
}

function initPetals() {
    const container = document.querySelector('.petal-container')
    if (!container) return;

    const petalColors = ['#f2bb7b', '#f4a5b9', '#ffffff'] // Gold, Pink, White

    function createPetal(startTop = null) {
        if (document.hidden) return;

        const petal = document.createElement('div')
        petal.className = 'petal'

        // Random properties
        const size = Math.random() * 10 + 6
        const left = Math.random() * 100
        const duration = Math.random() * 8 + 12
        const delay = startTop !== null ? 0 : Math.random() * 2 // No delay for initial screen petals
        const rotation = Math.random() * 360
        const color = petalColors[Math.floor(Math.random() * petalColors.length)]

        petal.style.width = `${size}px`
        petal.style.height = `${size}px`
        petal.style.left = `${left}%`
        petal.style.backgroundColor = color
        petal.style.borderRadius = '50% 0 50% 50%'
        petal.style.opacity = Math.random() * 0.4 + 0.3
        petal.style.transform = `rotate(${rotation}deg)`
        petal.style.animationDuration = `${duration}s`
        petal.style.animationDelay = `${delay}s`
        petal.style.position = 'absolute'

        // If startTop is provided (for initial load), set it; otherwise start from top
        petal.style.top = startTop !== null ? `${startTop}%` : '-5%'

        container.appendChild(petal)

        // Remove after animation
        setTimeout(() => {
            petal.remove()
        }, (duration + delay) * 1000)
    }

    // Initialize with petals distributed across the screen for instant effect
    for (let i = 0; i < 50; i++) {
        // Distribute half of them across the screen, the other half at the top
        const startTop = i < 25 ? Math.random() * 100 : null
        createPetal(startTop)
    }

    // Faster creation for more "abundance"
    setInterval(() => createPetal(), 400)
}

export function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const targetId = this.getAttribute('href')
            if (targetId === '#') return;
            const target = document.querySelector(targetId)
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' })
            }
        })
    })
}
