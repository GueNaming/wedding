import { weddingConfig } from './config.js'
import { initCountdown } from './modules/countdown.js'
import { initGallery } from './modules/gallery.js'
import { initAnimations, initSmoothScroll } from './modules/animations.js'
import { initAccount } from './modules/account.js'
import { initMap } from './modules/map.js'

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Wedding Invitation App Initializing...')

    // 1. Initialize core modules
    initAnimations()
    initSmoothScroll()
    initGallery()
    initCountdown(weddingConfig.wedding.date)
    initAccount()
    initMap()

    // 2. Utility Bar Interaction
    initUtilityBar()

    console.log('✨ Initialization Complete')
})

function initUtilityBar() {
    const utilityBar = document.querySelector('.utility-bar')
    const shareBtn = document.getElementById('shareBtn')
    const musicBtn = document.getElementById('musicBtn')

    let lastScrollTip = 0
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset
        if (currentScroll > lastScrollTip && currentScroll > 100) {
            utilityBar?.classList.add('hidden')
        } else {
            utilityBar?.classList.remove('hidden')
        }
        lastScrollTip = currentScroll
    })

    shareBtn?.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: '장규남 ❤️ 손은주 결혼합니다',
                text: '저희의 결혼식에 초대합니다.',
                url: window.location.href,
            }).catch(console.error)
        } else {
            // Fallback: Copy Link
            navigator.clipboard.writeText(window.location.href)
            alert('초대장 링크가 복사되었습니다.')
        }
    })

    let isMusicPlaying = false
    musicBtn?.addEventListener('click', () => {
        isMusicPlaying = !isMusicPlaying
        musicBtn.innerHTML = isMusicPlaying ?
            '<i class="fas fa-music"></i><span>BGM OFF</span>' :
            '<i class="fas fa-music"></i><span>BGM ON</span>'

        // Music logic would go here if an <audio> element exists
    })
}
