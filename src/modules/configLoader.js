import { weddingConfig } from '../config.js'

export function loadWeddingConfig() {
    console.log('🔗 Syncing UI with Config...')

    // 1. Titles and Meta
    const namesText = `${weddingConfig.groom.name} ❤️ ${weddingConfig.bride.name}`
    const fullDateText = weddingConfig.wedding.dateDisplay
    const timeText = weddingConfig.wedding.time

    document.title = `${namesText} 결혼합니다`
    const pageTitle = document.getElementById('page-title')
    if (pageTitle) pageTitle.innerText = `${namesText} 결혼합니다`

    // Meta tags
    updateMeta('description', `${namesText}의 결혼식에 초대합니다.`)
    updateMeta('og:title', `${namesText} 결혼합니다`)
    updateMeta('og:description', `${fullDateText} ${timeText}`)

    // 2. Intro Section
    setText('intro-names', `${weddingConfig.groom.name} & ${weddingConfig.bride.name}`)
    const introInfo = document.getElementById('intro-info')
    if (introInfo) {
        const dateObj = new Date(weddingConfig.wedding.date)
        const formatStr = `${dateObj.getFullYear()}. ${String(dateObj.getMonth() + 1).padStart(2, '0')}. ${String(dateObj.getDate()).padStart(2, '0')} SAT AM ${timeText.replace('오전 ', '')}`
        introInfo.innerHTML = `${formatStr}<br>${weddingConfig.wedding.venue.name}`
    }

    // 3. Couple Info Section
    setText('groom-name', weddingConfig.groom.name)
    setLink('groom-phone-btn', `tel:${weddingConfig.groom.phone}`)

    setText('groom-father-label', `아버지 ${weddingConfig.groom.father}`)
    setLink('groom-father-tel', `tel:${weddingConfig.groom.fatherPhone}`)
    setLink('groom-father-sms', `sms:${weddingConfig.groom.fatherPhone}`)

    setText('groom-mother-label', `어머니 ${weddingConfig.groom.mother}`)
    setLink('groom-mother-tel', `tel:${weddingConfig.groom.motherPhone}`)
    setLink('groom-mother-sms', `sms:${weddingConfig.groom.motherPhone}`)

    setText('bride-name', weddingConfig.bride.name)
    setLink('bride-phone-btn', `tel:${weddingConfig.bride.phone}`)

    setText('bride-father-label', `아버지 ${weddingConfig.bride.father}`)
    setLink('bride-father-tel', `tel:${weddingConfig.bride.fatherPhone}`)
    setLink('bride-father-sms', `sms:${weddingConfig.bride.fatherPhone}`)

    setText('bride-mother-label', `어머니 ${weddingConfig.bride.mother}`)
    setLink('bride-mother-tel', `tel:${weddingConfig.bride.motherPhone}`)
    setLink('bride-mother-sms', `sms:${weddingConfig.bride.motherPhone}`)

    // 4. Wedding Day Section
    setText('calendar-date-display', weddingConfig.wedding.dateDisplay.split(' ')[0] + ' ' + weddingConfig.wedding.dateDisplay.split(' ')[1] + ' ' + weddingConfig.wedding.dateDisplay.split(' ')[2])
    const countdownTitle = document.getElementById('countdown-title')
    if (countdownTitle) {
        countdownTitle.innerHTML = `${weddingConfig.groom.name} ❤️ ${weddingConfig.bride.name}의 결혼식이 <span id="days-val" style="color: var(--color-primary);">--</span>일 남았습니다.`
    }

    // 5. Location Section
    setText('venue-name', weddingConfig.wedding.venue.name)
    setText('venue-address', weddingConfig.wedding.venue.address)
    // Tel is handled separately or keep as is if fixed

    // 6. Heart Section (Accounts)
    renderAccounts('groomAccContent', weddingConfig.accounts.groom)
    renderAccounts('brideAccContent', weddingConfig.accounts.bride)

    // 7. Footer
    setText('footer-names', namesText)

    console.log('✅ UI Sync Complete')
}

function setText(id, text) {
    const el = document.getElementById(id)
    if (el) el.innerText = text
}

function setLink(id, href) {
    const el = document.getElementById(id)
    if (el) el.href = href
}

function updateMeta(property, content) {
    const selector = property.startsWith('og:') ? `meta[property="${property}"]` : `meta[name="${property}"]`
    const el = document.querySelector(selector)
    if (el) el.setAttribute('content', content)
}

function renderAccounts(containerId, accounts) {
    const container = document.getElementById(containerId)
    if (!container) return

    const accountBox = container.querySelector('.account-box')
    if (!accountBox) return

    accountBox.innerHTML = accounts.map(acc => `
        <div class="account-item-inner">
            <div class="account-text">
                <span class="bank">${acc.bank}</span>
                <span class="number">${acc.accountNumber}</span>
                <span class="holder">예금주: ${acc.holder}</span>
            </div>
            <button class="copy-btn-small" data-account="${acc.accountNumber}">복사</button>
        </div>
    `).join('')
}
