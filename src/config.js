// Wedding Configuration
export const weddingConfig = {
    groom: {
        name: '장규남',
        father: '장완식',
        mother: '조성자',
        phone: '01029986038',
        fatherPhone: '01042566038',
        motherPhone: '01024849264',
    },
    bride: {
        name: '손은주',
        father: '아무개1',
        mother: '아무개2',
        phone: '01029986038',
        fatherPhone: '01029986038',
        motherPhone: '01029986038',
    },
    wedding: {
        date: '2026-04-18T11:30:00+09:00',
        dateDisplay: '2026년 4월 18일 토요일',
        time: '오전 11시 30분',
        venue: {
            name: 'NH송파농협 13층 아모르홀',
            address: '서울특별시 송파구 송파대로 155',
            fullAddress: '서울특별시 송파구 송파대로 155 NH송파농협 13층 아모르홀',
            coordinates: {
                lat: 37.4916, // Approximate for NH Songpa
                lng: 127.1184,
            },
        },
    },
    maps: {
        tmap: 'https://tmap.life/NH송파농협',
        kakao: 'https://map.kakao.com/link/map/NH송파농협,37.4916,127.1184',
        naver: 'https://map.naver.com/v5/search/NH송파농협',
    },
    accounts: {
        groom: {
            bank: '신한은행',
            accountNumber: '110-123-456789',
            holder: '장규남',
        },
        bride: {
            bank: '우리은행',
            accountNumber: '1002-123-456789',
            holder: '손은주',
        },
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
