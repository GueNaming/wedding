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
    const container = document.querySelector('.app-container')
    if (!container) return;

    const petalColors = ['#f2bb7b', '#f4a5b9', '#ffffff'] // Gold, Pink, White

    function createPetal() {
        const petal = document.createElement('div')
        petal.className = 'petal'

        // Random properties
        const size = Math.random() * 10 + 5
        const left = Math.random() * 100
        const duration = Math.random() * 10 + 10
        const delay = Math.random() * 5
        const color = petalColors[Math.floor(Math.random() * petalColors.length)]

        petal.style.width = `${size}px`
        petal.style.height = `${size}px`
        petal.style.left = `${left}%`
        petal.style.backgroundColor = color
        petal.style.borderRadius = '50% 0 50% 50%' // Petal shape
        petal.style.opacity = Math.random() * 0.5 + 0.2
        petal.style.animationDuration = `${duration}s`
        petal.style.animationDelay = `${delay}s`
        petal.style.position = 'absolute'
        petal.style.top = '-10%'

        container.appendChild(petal)

        // Remove after animation
        setTimeout(() => {
            petal.remove()
        }, (duration + delay) * 1000)
    }

    // Create a few initial petals
    for (let i = 0; i < 15; i++) {
        createPetal()
    }

    // Continuously create petals
    setInterval(createPetal, 2000)
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
