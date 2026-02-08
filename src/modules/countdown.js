// Countdown Module - Wedding countdown timer
export function initCountdown(targetDate) {
    console.log('🏁 Countdown initialized')

    const elements = {
        days: document.getElementById('days-val'),
        hours: document.getElementById('hours-val'),
        minutes: document.getElementById('minutes-val'),
        seconds: document.getElementById('seconds-val')
    }

    function update() {
        const now = new Date().getTime()
        const target = new Date(targetDate).getTime()
        const diff = target - now

        if (diff <= 0) {
            if (elements.days) elements.days.innerText = '0'
            if (elements.hours) elements.hours.innerText = '00'
            if (elements.minutes) elements.minutes.innerText = '00'
            if (elements.seconds) elements.seconds.innerText = '00'
            return
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24))
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const s = Math.floor((diff % (1000 * 60)) / 1000)

        if (elements.days) elements.days.innerText = d
        if (elements.hours) elements.hours.innerText = h.toString().padStart(2, '0')
        if (elements.minutes) elements.minutes.innerText = m.toString().padStart(2, '0')
        if (elements.seconds) elements.seconds.innerText = s.toString().padStart(2, '0')
    }

    update()
    setInterval(update, 1000)
}
