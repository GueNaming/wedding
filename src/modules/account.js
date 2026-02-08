export function initAccount() {
    console.log('💰 Account module initialized')

    // 1. Accordion Logic
    const accordionBtns = document.querySelectorAll('.accordion-header')
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling
            const icon = btn.querySelector('i')

            // Toggle active class
            content.classList.toggle('active')

            // Rotate icon
            if (content.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)'
            } else {
                icon.style.transform = 'rotate(0deg)'
            }

            // Optional: Close other accordions
            accordionBtns.forEach(otherBtn => {
                if (otherBtn !== btn) {
                    otherBtn.nextElementSibling.classList.remove('active')
                    otherBtn.querySelector('i').style.transform = 'rotate(0deg)'
                }
            })
        })
    })

    // 2. Copy Logic
    const copyBtns = document.querySelectorAll('.copy-btn-small')
    copyBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            const account = btn.getAttribute('data-account')
            try {
                await navigator.clipboard.writeText(account)
                const originalText = btn.innerText
                btn.innerText = '복사되었습니다!'
                btn.style.backgroundColor = '#7a93bd'

                setTimeout(() => {
                    btn.innerText = originalText
                    btn.style.backgroundColor = ''
                }, 2000)
            } catch (err) {
                console.error('Failed to copy:', err)
                alert('계좌번호 복사에 실패했습니다.')
            }
        })
    })

    // 3. Shortcut Button (Utility Bar)
    const shortcutBtn = document.getElementById('shortcutAccountBtn')
    const heartSection = document.querySelector('.heart-section')
    shortcutBtn?.addEventListener('click', () => {
        heartSection?.scrollIntoView({ behavior: 'smooth' })
    })
}
