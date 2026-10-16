// वैदिक ज्योतिष गणना इंजन (Lagna, D9 Navamsha, Dasha & Dosha)
const RASHIS_HI = ["मेष", "वृषभ", "मिथुन", "कर्क", "सिंह", "कन्या", "तुला", "वृश्चिक", "धनु", "मकर", "कुंभ", "मीन"];
const RASHIS_EN = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

const PLANET_NAMES_HI = { Sun: "सूर्य", Moon: "चन्द्र", Mars: "मंगल", Mercury: "बुध", Jupiter: "गुरु", Venus: "शुक्र", Saturn: "शनि", Rahu: "राहु", Ketu: "केतु", Asc: "लग्न" };
const PLANET_NAMES_EN = { Sun: "Sun", Moon: "Moon", Mars: "Mars", Mercury: "Mercury", Jupiter: "Jupiter", Venus: "Venus", Saturn: "Saturn", Rahu: "Rahu", Ketu: "Ketu", Asc: "Asc" };

const DASHA_LORDS = [
    { planet: "Ketu", nameHi: "केतु", years: 7 },
    { planet: "Venus", nameHi: "शुक्र", years: 20 },
    { planet: "Sun", nameHi: "सूर्य", years: 6 },
    { planet: "Moon", nameHi: "चन्द्र", years: 10 },
    { planet: "Mars", nameHi: "मंगल", years: 7 },
    { planet: "Rahu", nameHi: "राहु", years: 18 },
    { planet: "Jupiter", nameHi: "गुरु", years: 16 },
    { planet: "Saturn", nameHi: "शनि", years: 19 },
    { planet: "Mercury", nameHi: "बुध", years: 17 }
];

class VedicAstrologyEngine {
    constructor(dob, tob) {
        this.birthDateTime = new Date(`${dob}T${tob}:00`);
    }

    getJulianDate(date) {
        return (date.getTime() / 86400000.0) + 2440587.5;
    }

    calculateChart() {
        const jd = this.getJulianDate(this.birthDateTime);
        const ayanamsa = 24.1;

        const mockPositions = {
            Asc: (Math.floor(jd % 360) + 45) % 360,
            Sun: (Math.floor((jd * 0.9856) % 360) - ayanamsa + 360) % 360,
            Moon: (Math.floor((jd * 13.176) % 360) - ayanamsa + 360) % 360,
            Mars: (Math.floor((jd * 0.524) % 360) - ayanamsa + 360) % 360,
            Mercury: (Math.floor((jd * 1.15) % 360) - ayanamsa + 360) % 360,
            Jupiter: (Math.floor((jd * 0.083) % 360) - ayanamsa + 360) % 360,
            Venus: (Math.floor((jd * 0.85) % 360) - ayanamsa + 360) % 360,
            Saturn: (Math.floor((jd * 0.033) % 360) - ayanamsa + 360) % 360,
            Rahu: (360 - (Math.floor(jd * 0.053) % 360)) % 360,
            Ketu: (540 - (Math.floor(jd * 0.053) % 360)) % 360
        };

        const d1LagnaRashi = Math.floor(mockPositions.Asc / 30);
        const d1Houses = {};
        for (let i = 1; i <= 12; i++) d1Houses[i] = [];

        Object.keys(mockPositions).forEach(planet => {
            const rashi = Math.floor(mockPositions[planet] / 30);
            let houseNum = ((rashi - d1LagnaRashi + 12) % 12) + 1;
            d1Houses[houseNum].push({
                planet: planet,
                degree: (mockPositions[planet] % 30).toFixed(2),
                rashiIndex: rashi
            });
        });

        // नवमांश (D9)
        const d9LagnaRashi = this.calculateNavamshaRashi(mockPositions.Asc);
        const d9Houses = {};
        for (let i = 1; i <= 12; i++) d9Houses[i] = [];

        Object.keys(mockPositions).forEach(planet => {
            const rashi = this.calculateNavamshaRashi(mockPositions[planet]);
            let houseNum = ((rashi - d9LagnaRashi + 12) % 12) + 1;
            d9Houses[houseNum].push({
                planet: planet,
                degree: (mockPositions[planet] % 3.333).toFixed(2),
                rashiIndex: rashi
            });
        });

        return {
            d1: { lagnaRashi: d1LagnaRashi, houses: d1Houses },
            d9: { lagnaRashi: d9LagnaRashi, houses: d9Houses },
            positions: mockPositions,
            dosha: this.calculateDoshas(mockPositions, d1Houses),
            dasha: this.calculateVimshottari(mockPositions.Moon)
        };
    }

    calculateNavamshaRashi(totalDegree) {
        const sign = Math.floor(totalDegree / 30);
        const part = Math.floor((totalDegree % 30) / (30 / 9));
        let startSign = 0;
        if ([0, 4, 8].includes(sign)) startSign = 0;
        else if ([1, 5, 9].includes(sign)) startSign = 9;
        else if ([2, 6, 10].includes(sign)) startSign = 6;
        else startSign = 3;
        return (startSign + part) % 12;
    }

    calculateDoshas(positions, houses) {
        let marsHouse = 1;
        for (let h = 1; h <= 12; h++) {
            if (houses[h].some(p => p.planet === 'Mars')) {
                marsHouse = h;
                break;
            }
        }
        const isManglik = [1, 4, 7, 8, 12].includes(marsHouse);
        const moonRashi = Math.floor(positions.Moon / 30);
        const currentSaturnRashi = 10;
        const diff = (currentSaturnRashi - moonRashi + 12) % 12;
        const isSadeSati = [11, 0, 1].includes(diff);
        return { isManglik, marsHouse, isSadeSati };
    }

    calculateVimshottari(moonDegree) {
        const nakshatraSpan = 360 / 27;
        const nakshatraIndex = Math.floor(moonDegree / nakshatraSpan);
        const lordIndex = nakshatraIndex % 9;
        return {
            startingLord: DASHA_LORDS[lordIndex],
            nakshatraNum: nakshatraIndex + 1,
            cycle: DASHA_LORDS
        };
    }
}
