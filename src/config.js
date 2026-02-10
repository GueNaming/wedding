// Wedding Configuration
export const weddingConfig = {
    groom: {
        name: '장규남',
        nameEn: 'Gyunam',
        father: '장완식',
        mother: '조성자',
        phone: '01029986038',
        fatherPhone: '01042566038',
        motherPhone: '01024849264',
    },
    bride: {
        name: '손은주',
        nameEn: 'Eunju',
        father: '손해영',
        mother: '이명숙',
        phone: '01083052668',
        fatherPhone: '01054772668',
        motherPhone: '01025202668',
    },
    wedding: {
        date: '2026-04-18T11:10:00+09:00',
        dateDisplay: '2026년 4월 18일 토요일',
        time: '오전 11시 10분',
        venue: {
            name: '더컨벤션 송파문정 아모르홀 13층',
            address: '서울특별시 송파구 송파대로 155',
            fullAddress: '서울특별시 송파구 송파대로 155 더컨벤션 송파문정 아모르홀 13층',
            coordinates: {
                lat: 37.4916, // Approximate for NH Songpa
                lng: 127.1184,
            },
        },
    },
    maps: {
        tmap: 'https://apis.openapi.sk.com/tmap/app/routes?name=NH송파농협&lat=37.4916&lon=127.1184',
        kakao: 'https://map.kakao.com/link/map/NH송파농협,37.4916,127.1184',
        naver: 'https://map.naver.com/v5/search/NH송파농협/place/13146430',
    },
    accounts: {
        groom: [
            { bank: '농협', accountNumber: '221087-52-078142', holder: '장완식' },
            { bank: '농협', accountNumber: '221054-52-154863', holder: '조성자' },
            { bank: '카카오뱅크', accountNumber: '3333-08-0277772', holder: '장규남' },
        ],
        bride: [
            { bank: '농협', accountNumber: '737070-52-109123', holder: '손해영' },
            { bank: '우리은행', accountNumber: '1002-053-552006', holder: '이명숙' },
            { bank: '카카오뱅크', accountNumber: '3333-01-2428883', holder: '손은주' },
        ],
    },
    theme: {
        colors: {
            primary: '#8ba4d0', // Muted blue from sample
            secondary: '#e8e4e1', // Warm beige
            text: '#4a4a4a',
            textLight: '#8c8c8c',
            accent: '#f2bb7b', // Gold-ish leaf color
        },
        fonts: {
            serif: "'Gyeonggi-Batang', serif",
            sans: "'Pretendard', sans-serif",
        },
    },
}
