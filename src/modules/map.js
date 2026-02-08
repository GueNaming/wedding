import { weddingConfig } from '../config.js'
// main.js (가장 상단 or map 초기화 전에)
window.navermap_authFailure = function () {
    console.error("NAVER MAP auth failed: 서비스 URL(도메인) 등록/권한 확인 필요");
    // 원하면 사용자 안내 UI도 여기서 띄우기
};
export function initMap() {
    console.log('🗺️ Map module initialized')

    const mapContainer = document.getElementById('naver-map')
    if (!mapContainer) return

    const lat = weddingConfig.wedding.venue.coordinates.lat
    const lng = weddingConfig.wedding.venue.coordinates.lng

    // 1. Initialize Naver Map
    try {
        if (typeof naver !== 'undefined' && naver.maps) {
            const mapOptions = {
                center: new naver.maps.LatLng(lat, lng),
                zoom: 16,
                minZoom: 14,
                zoomControl: true,
                zoomControlOptions: {
                    position: naver.maps.Position.TOP_RIGHT
                },
                mapTypeControl: false,
            }

            const map = new naver.maps.Map('naver-map', mapOptions)

            const marker = new naver.maps.Marker({
                position: new naver.maps.LatLng(lat, lng),
                map: map,
                icon: {
                    content: `
                        <div style="cursor:pointer; position:relative;">
                            <div style="background:var(--color-primary); color:white; padding:5px 12px; border-radius:20px; font-size:12px; font-weight:bold; white-space:nowrap; box-shadow:0 2px 6px rgba(0,0,0,0.2);">
                                ${weddingConfig.wedding.venue.name}
                            </div>
                            <div style="width:0; height:0; border-left:6px solid transparent; border-right:6px solid transparent; border-top:8px solid var(--color-primary); margin:0 auto;"></div>
                        </div>
                    `,
                    anchor: new naver.maps.Point(50, 40)
                }
            })

            // Center map on resize
            window.addEventListener('resize', () => {
                map.setCenter(new naver.maps.LatLng(lat, lng))
            })

        } else {
            throw new Error('Naver Map API not found')
        }
    } catch (err) {
        console.error('Failed to init Naver Map:', err)
        mapContainer.innerHTML = `
            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8f9fa; color:#888; padding:20px; text-align:center;">
                <i class="fas fa-map-marked-alt" style="font-size:2rem; margin-bottom:10px; color:#ccc;"></i>
                <p style="font-size:0.85rem; line-height:1.5;">지도를 불러올 수 없습니다.<br><strong style="color:#d9534f;">NCP 콘솔에서 'Web Dynamic Map' 서비스가<br>활성화되어 있는지 확인해 주세요.</strong></p>
                <a href="${weddingConfig.maps.naver}" target="_blank" style="margin-top:10px; font-size:0.75rem; color:var(--color-primary);">네이버 지도로 보기</a>
            </div>
        `
    }

    // 2. Navigation Links
    const tmapBtn = document.getElementById('tmap-link')
    const kakaoBtn = document.getElementById('kakao-link')
    const naverBtn = document.getElementById('naver-link')

    // T-Map URL Scheme for Mobile
    const tmapUrl = `tmap://search?name=${encodeURIComponent(weddingConfig.wedding.venue.name)}&lat=${lat}&lon=${lng}`
    const tmapWebUrl = weddingConfig.maps.tmap

    tmapBtn?.addEventListener('click', (e) => {
        e.preventDefault()
        const start = Date.now()

        // Try to open the app first
        window.location.href = tmapUrl

        // Fallback to web link if app doesn't open
        setTimeout(() => {
            if (Date.now() - start < 2000) {
                window.open(tmapWebUrl, '_blank')
            }
        }, 1500)
    })

    // Kakao Map
    kakaoBtn?.addEventListener('click', (e) => {
        e.preventDefault()
        window.open(weddingConfig.maps.kakao, '_blank')
    })

    // Naver Map
    naverBtn?.addEventListener('click', (e) => {
        e.preventDefault()
        window.open(weddingConfig.maps.naver, '_blank')
    })
}
