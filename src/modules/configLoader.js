import { weddingConfig } from '../config.js'

export function loadWeddingConfig() {
    try {
        console.log('🔗 Syncing UI with Config...');

        if (!weddingConfig) {
            console.error('❌ weddingConfig is missing!');
            return;
        }

        // 1. Titles and Meta
        const namesText = `${weddingConfig.groom.name} ❤️ ${weddingConfig.bride.name}`
        const fullDateText = weddingConfig.wedding.dateDisplay
        const timeText = weddingConfig.wedding.time

        document.title = `${namesText} 결혼합니다`
        const pageTitle = document.getElementById('page-title')
        if (pageTitle) pageTitle.innerText = `${namesText} 결혼합니다`

        // Meta tags
        console.log('📡 Updating meta tags...');
        updateMeta('description', `${namesText}의 결혼식에 초대합니다.`)
        updateMeta('og:title', `${namesText} 결혼합니다`)
        updateMeta('og:description', `${fullDateText} ${timeText}`)

        // 2. Intro Section
        console.log('🎨 Syncing intro section...');
        // setText('intro-names', `${weddingConfig.groom.name} <br> ${weddingConfig.bride.name}`)
        const introInfo = document.getElementById('intro-info')
        if (introInfo) {
            const dateObj = new Date(weddingConfig.wedding.date)
            if (isNaN(dateObj.getTime())) {
                console.error('❌ Invalid date in weddingConfig:', weddingConfig.wedding.date);
            } else {
                const formatStr = `${dateObj.getFullYear()}. ${String(dateObj.getMonth() + 1).padStart(2, '0')}. ${String(dateObj.getDate()).padStart(2, '0')} SAT AM ${timeText.replace('오전 ', '')}`
                introInfo.innerHTML = `${formatStr}<br>${weddingConfig.wedding.venue.name}`
            }
        }

        // 2-1. Family Relations in Greeting
        console.log('👪 Syncing family relations...');
        setText('groom-parents-relation', `${weddingConfig.groom.father} · ${weddingConfig.groom.mother}`)
        setText('groom-name-relation', weddingConfig.groom.name)
        setText('bride-parents-relation', `${weddingConfig.bride.father} · ${weddingConfig.bride.mother}`)
        setText('bride-name-relation', weddingConfig.bride.name)

        // 3. Couple Info Section
        console.log('👥 Syncing couple info...');
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
        console.log('📅 Syncing wedding day section...');
        if (weddingConfig.wedding.dateDisplay) {
            const dateParts = weddingConfig.wedding.dateDisplay.split(' ');
            if (dateParts.length >= 3) {
                setText('calendar-date-display', `${dateParts[0]} ${dateParts[1]} ${dateParts[2]} ${weddingConfig.wedding.time}`)
            }
        }

        const countdownTitle = document.getElementById('countdown-title')
        if (countdownTitle) {
            countdownTitle.innerHTML = `${weddingConfig.groom.name} ❤️ ${weddingConfig.bride.name}의 결혼식이 <span id="days-val" style="color: var(--color-primary);">--</span>일 남았습니다.`
        }

        // 5. Location Section
        console.log('📍 Syncing location section...');
        setText('venue-name', weddingConfig.wedding.venue.name)
        setText('venue-address', weddingConfig.wedding.venue.address)
        setText('venue-tel', `Tel. ${weddingConfig.wedding.time === '오전 11시 10분' ? '02-6418-5000' : '02-6418-5000'}`) // Fallback to current hardcoded value if not in config

        // 6. Heart Section (Accounts)
        console.log('💰 Syncing account section...');
        renderAccounts('groomAccContent', weddingConfig.accounts.groom)
        renderAccounts('brideAccContent', weddingConfig.accounts.bride)

        // 7. Footer
        setText('footer-names', namesText)

        console.log('✅ UI Sync Complete');
    } catch (error) {
        console.error('❌ Failed to load wedding config:', error);
    }
}

function setText(id, text) {
    const el = document.getElementById(id)
    if (el) {
        el.innerText = text;
    } else {
        console.warn(`⚠️ Element with id "${id}" not found.`);
    }
}

function setLink(id, href) {
    const el = document.getElementById(id)
    if (el) {
        el.href = href;
    } else {
        console.warn(`⚠️ Link with id "${id}" not found.`);
    }
}

function updateMeta(property, content) {
    const selector = property.startsWith('og:') ? `meta[property="${property}"]` : `meta[name="${property}"]`
    const el = document.querySelector(selector)
    if (el) {
        el.setAttribute('content', content);
    } else {
        console.warn(`⚠️ Meta tag "${property}" not found.`);
    }
}

function renderAccounts(containerId, accounts) {
    const container = document.getElementById(containerId)
    if (!container) {
        console.warn(`⚠️ Account container "${containerId}" not found.`);
        return;
    }

    const accountBox = container.querySelector('.account-box')
    if (!accountBox) {
        console.warn(`⚠️ .account-box not found inside "${containerId}".`);
        return;
    }

    if (!Array.isArray(accounts)) {
        console.error(`❌ accounts for "${containerId}" is not an array:`, accounts);
        return;
    }

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
