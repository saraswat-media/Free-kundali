// Vedic Astrology Detailed Engine (20 Page Comprehensive Report)
const RASHIS_HI = ["मेष", "वृषभ", "मिथुन", "कर्क", "सिंह", "कन्या", "तुला", "वृश्चिक", "धनु", "मकर", "कुंभ", "मीन"];
const RASHIS_EN = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

const PLANET_NAMES_HI = { Sun: "सूर्य", Moon: "चन्द्र", Mars: "मंगल", Mercury: "बुध", Jupiter: "गुरु", Venus: "शुक्र", Saturn: "शनि", Rahu: "राहु", Ketu: "केतु", Asc: "लग्न" };
const PLANET_NAMES_EN = { Sun: "Sun", Moon: "Moon", Mars: "Mars", Mercury: "Mercury", Jupiter: "Jupiter", Venus: "Venus", Saturn: "Saturn", Rahu: "Rahu", Ketu: "Ketu", Asc: "Asc" };

const NAKSHATRAS = [
    { name: "अश्विनी", lord: "Ketu", yoni: "अश्व", gana: "देव", nadi: "आद्य" },
    { name: "भरणी", lord: "Venus", yoni: "गज", gana: "मनुष्य", nadi: "मध्य" },
    { name: "कृत्तिका", lord: "Sun", yoni: "मेष", gana: "राक्षस", nadi: "अन्त्य" },
    { name: "रोहिणी", lord: "Moon", yoni: "सर्प", gana: "मनुष्य", nadi: "अन्त्य" },
    { name: "मृगशिरा", lord: "Mars", yoni: "सर्प", gana: "देव", nadi: "मध्य" },
    { name: "आर्द्रा", lord: "Rahu", yoni: "श्वान", gana: "मनुष्य", nadi: "आद्य" },
    { name: "पुनर्वसु", lord: "Jupiter", yoni: "मार्जार", gana: "देव", nadi: "आद्य" },
    { name: "पुष्य", lord: "Saturn", yoni: "मेष", gana: "देव", nadi: "मध्य" },
    { name: "आश्लेषा", lord: "Mercury", yoni: "मार्जार", gana: "राक्षस", nadi: "अन्त्य" },
    { name: "मघा", lord: "Ketu", yoni: "मूषक", gana: "राक्षस", nadi: "आद्य" },
    { name: "पूर्वाफाल्गुनी", lord: "Venus", yoni: "मूषक", gana: "मनुष्य", nadi: "मध्य" },
    { name: "उत्तराफाल्गुनी", lord: "Sun", yoni: "गौ", gana: "मनुष्य", nadi: "अन्त्य" },
    { name: "हस्त", lord: "Moon", yoni: "महिष", gana: "देव", nadi: "आद्य" },
    { name: "चित्रा", lord: "Mars", yoni: "व्याघ्र", gana: "राक्षस", nadi: "मध्य" },
    { name: "स्वाती", lord: "Rahu", yoni: "महिष", gana: "देव", nadi: "अन्त्य" },
    { name: "विशाखा", lord: "Jupiter", yoni: "व्याघ्र", gana: "राक्षस", nadi: "अन्त्य" },
    { name: "अनुराधा", lord: "Saturn", yoni: "मृग", gana: "देव", nadi: "मध्य" },
    { name: "ज्येष्ठा", lord: "Mercury", yoni: "मृग", gana: "राक्षस", nadi: "आद्य" },
    { name: "मूल", lord: "Ketu", yoni: "श्वान", gana: "राक्षस", nadi: "आद्य" },
    { name: "पूर्वाषाढ़ा", lord: "Venus", yoni: "वानर", gana: "मनुष्य", nadi: "मध्य" },
    { name: "उत्तराषाढ़ा", lord: "Sun", yoni: "नकुल", gana: "मनुष्य", nadi: "अन्त्य" },
    { name: "श्रवण", lord: "Moon", yoni: "वानर", gana: "देव", nadi: "अन्त्य" },
    { name: "धनिष्ठा", lord: "Mars", yoni: "सिंह", gana: "राक्षस", nadi: "मध्य" },
    { name: "शतभिषा", lord: "Rahu", yoni: "अश्व", gana: "राक्षस", nadi: "आद्य" },
    { name: "पूर्वाभाद्रपद", lord: "Jupiter", yoni: "सिंह", gana: "मनुष्य", nadi: "आद्य" },
    { name: "उत्तराभाद्रपद", lord: "Saturn", yoni: "गौ", gana: "मनुष्य", nadi: "मध्य" },
    { name: "रेवती", lord: "Mercury", yoni: "गज", gana: "देव", nadi: "अन्त्य" }
];

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

const BHAV_DETAILS = [
    { num: 1, name: "तनु भाव (Lagna)", topic: "व्यक्तित्व, स्वभाव, स्वास्थ्य, रूप-रंग एवं आत्मबल", fal: "प्रथम भाव जातक के संपूर्ण जीवन का आधार है। यह शारीरिक संरचना, जीवन ऊर्जा और दृष्टिकोण को दर्शाता है। शुभ ग्रहों के प्रभाव से जातक तेजस्वी, दृढ़निश्चयी, समाज में मान-सम्मान प्राप्त करने वाला तथा नेतृत्व क्षमता से परिपूर्ण होता है।" },
    { num: 2, name: "धन भाव (Dhana)", topic: "पैतृक संपत्ति, वाणी, संचित धन, कुटुंब एवं खान-पान", fal: "द्वितीय भाव आर्थिक स्थिति और पारिवारिक सहयोग का कारक है। इस भाव का शुभ प्रभाव जातक को मधुरभाषी, कुटुंब का प्रिय, तथा जीवन में निरंतर संचित धन में वृद्धि करने वाला बनाता है। आकस्मिक धन लाभ के योग बनते हैं।" },
    { num: 3, name: "सहज भाव (Bhratru)", topic: "पराक्रम, छोटे भाई-बहन, साहस, संचार एवं लघु यात्राएं", fal: "तृतीय भाव जातक के आत्मबल, मेहनत और पुरुषार्थ को दर्शाता है। यह स्थिति जातक को साहसी, अपने दम पर भाग्य निर्माण करने वाला और तकनीकी व संचार क्षेत्रों में सफलता दिलाने वाली मानी जाती है।" },
    { num: 4, name: "सुख भाव (Matru)", topic: "माता, गृह, भूमि, वाहन, मानसिक शांति एवं अचल संपत्ति", fal: "चतुर्थ भाव जीवन में सुख-साधनों और मातृ सुख का प्रतीक है। शुभ ग्रहों की दृष्टि उत्तम भवन सुख, चार पहिया वाहन, भूमि-जायदाद में वृद्धि और स्थिर मानसिक शांति प्रदान करती है।" },
    { num: 5, name: "पुत्र भाव (Santana)", topic: "संतान, बुद्धि, उच्च विद्या, मंत्र सिद्धि एवं पूर्व पुण्य", fal: "पंचम भाव पूर्व जन्म के संचित पुण्यों, रचनात्मकता और ज्ञान का द्योतक है। यह जातक को तीव्र बुद्धिमत्ता, उच्च शिक्षा में उत्कृष्टता, निर्णय क्षमता और आज्ञाकारी संतान का सुख प्रदान करता है।" },
    { num: 6, name: "रिपु भाव (Ari)", topic: "शत्रु, रोग, ऋण, प्रतियोगिता परीक्षा एवं सेवा कार्य", fal: "छठा भाव जीवन की चुनौतियों और प्रतिस्पर्धा का केंद्र है। यदि इस भाव में बली ग्रह हों तो जातक गुप्त शत्रुओं पर विजय प्राप्त करता है, प्रतियोगी परीक्षाओं में सफल होता है और कर्जमुक्त जीवन व्यतीत करता है।" },
    { num: 7, name: "कलत्र भाव (Yuvati)", topic: "विवाह, जीवनसाथी, साझेदारी, व्यापार एवं सार्वजनिक संबंध", fal: "सप्तम भाव दांपत्य सुख और व्यावसायिक साझेदारियों को नियंत्रित करता है। यह भाव जीवनसाथी के स्वभाव, आकर्षण और वैवाहिक जीवन की मधुरता का निर्धारण करता है। व्यापार में जनसंपर्क से लाभ मिलता है।" },
    { num: 8, name: "आयु भाव (Randhra)", topic: "दीर्घायु, शोध, गुप्त धन, आकस्मिक परिवर्तन एवं गूढ़ विद्या", fal: "अष्टम भाव जातक की आयु, पैतृक वसीयत और आध्यात्मिक गहराई का भाव है। यह जातक को गूढ़ विज्ञान, ज्योतिष, अनुसंधान और आकस्मिक धन संपदा की ओर आकर्षित करता है।" },
    { num: 9, name: "धर्म भाव (Bhagya)", topic: "भाग्य, धर्म, तीर्थ यात्रा, पिता का मार्गदर्शन एवं गुरु कृपा", fal: "नवम भाव कुंडली का सर्वाधिक शुभ त्रिकोण है। भाग्येश की कृपा से जातक अल्प प्रयास से भी अप्रत्याशित सफलता पाता है, धार्मिक कार्यों में रुचि रखता है और पिता व गुरुजनों का पूरा आशीर्वाद मिलता है।" },
    { num: 10, name: "कर्म भाव (Karma)", topic: "आजीविका, पद-प्रतिष्ठा, करियर, प्रशासनिक सम्मान एवं अधिकार", fal: "दशम भाव जातक के कार्यक्षेत्र, सरकारी पद और सामाजिक प्रतिष्ठा का निर्धारण करता है। दशम भाव की प्रबलता जातक को प्रतिष्ठित अधिकारी, सफल उद्योगपति या समाज में सम्मानित पद पर आसीन करती है।" },
    { num: 11, name: "लाभ भाव (Labha)", topic: "आय के स्रोत, बड़े भाई-बहन, महत्वाकांक्षाएं एवं आर्थिक समृद्धि", fal: "एकादश भाव सभी प्रकार की इच्छाओं की पूर्ति और नियमित आमदनी का भाव है। यह भाव जातक को विविध स्रोतों से आय, समाज के उच्च वर्ग से संबंध और व्यावसायिक उन्नति का आशीर्वाद देता है।" },
    { num: 12, name: "व्यय भाव (Vyaya)", topic: "खर्च, विदेश गमन, मोक्ष, अस्पताल एवं निवेश", fal: "द्वादश भाव दूरस्थ यात्राओं, विदेशी संपर्कों और आध्यात्मिक मुक्ति का प्रतीक है। शुभ ग्रहों की स्थिति जातक को विदेशों से व्यापारिक लाभ, आध्यात्मिक प्रगति और शुभ कार्यों में धन व्यय करने की प्रेरणा देती है।" }
];

const PLANET_FALADESH = {
    Sun: "सूर्य आत्मकारक ग्रह है। कुंडली में इसकी स्थिति जातक को स्वाभिमान, नेतृत्व क्षमता, सरकारी तंत्र से लाभ तथा दृढ़ व्यक्तित्व प्रदान करती है। पिता के साथ संबंध और शारीरिक ऊर्जा में सूर्य की मुख्य भूमिका रहती है।",
    Moon: "चन्द्रमा मन, माता और मानसिक शांति का स्वामी है। अनुकूल चन्द्रमा जातक को संवेदनशील, शांत चित्त, कलात्मक सोच और जनता के बीच लोकप्रिय बनाता है। जल तत्व और तरल पदार्थों के व्यापार में लाभ मिलता है।",
    Mars: "मंगल साहस, रक्त, भूमि और पराक्रम का कारक है। मंगल की स्थिति जातक को साहसी, त्वरित निर्णय लेने वाला, सेना/पुलिस/इंजीनियरिंग में दक्ष और संपत्ति का स्वामी बनाती है।",
    Mercury: "बुध वाणी, तर्क, गणित, व्यापार और हास्य-विनोद का स्वामी है। मजबूत बुध जातक को तीव्र स्मरण शक्ति, चतुर व्यापारी, उत्कृष्ट लेखक तथा वित्तीय मामलों में अत्यधिक निपुण बनाता है।",
    Jupiter: "गुरु (बृहस्पति) ज्ञान, धर्म, संतान, धन और भाग्य का नैसर्गिक शुभ ग्रह है। कुंडली में गुरु का प्रभाव जातक को विद्वान, नैतिक, सलाहकार, समाज में अत्यंत प्रतिष्ठित और ऐश्वर्यवान बनाता है।",
    Venus: "शुक्र भौतिक सुख-सुविधा, वाहन, सौंदर्य, प्रेम, विवाह और कलात्मक प्रतिभा का कारक है। शुक्र का अनुकूल प्रभाव जातक को आकर्षक व्यक्तित्व, विलासिता पूर्ण जीवनशैली और वैवाहिक सौहार्द प्रदान करता है।",
    Saturn: "शनि न्याय, कर्म, धैर्य, अनुशासन और दीर्घायु के अधिष्ठाता हैं। शनि व्यक्ति को कठोर परिश्रम से तपाकर स्थाई सफलता, प्रशासनिक दक्षता, जनसमर्थन और स्थिर संपत्ति का वरदान देते हैं।",
    Rahu: "राहु आकस्मिक उन्नति, तकनीकी क्षेत्र, विदेशी संपर्क, राजनीति और कूटनीति का कारक है। अनुकूल राहु जातक को तीव्र कूटनीतिक बुद्धि, इंटरनेट व डिजिटल मीडिया में अप्रत्याशित सफलता दिलाता है।",
    Ketu: "केतु मोक्ष, वैराग्य, शोध और आध्यात्मिक अंतर्दृष्टि का प्रतीक है। केतु जातक को पारलौकिक ज्ञान, शल्य चिकित्सा, कोडिंग व रिसर्च के क्षेत्र में विलक्षण अंतर्ज्ञान प्रदान करता है।"
};

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

        // D9 Navamsha
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

        // Chandra Kundali (Moon as Lagna)
        const moonRashi = Math.floor(mockPositions.Moon / 30);
        const moonHouses = {};
        for (let i = 1; i <= 12; i++) moonHouses[i] = [];
        Object.keys(mockPositions).forEach(planet => {
            const rashi = Math.floor(mockPositions[planet] / 30);
            let houseNum = ((rashi - moonRashi + 12) % 12) + 1;
            moonHouses[houseNum].push({ planet, degree: (mockPositions[planet] % 30).toFixed(2), rashiIndex: rashi });
        });

        // Nakshatra and Panchang
        const nakSpan = 360 / 27;
        const nakIndex = Math.floor(mockPositions.Moon / nakSpan);
        const nakData = NAKSHATRAS[nakIndex % 27];
        const moonRashiName = RASHIS_HI[moonRashi];
        const lagnaRashiName = RASHIS_HI[d1LagnaRashi];

        return {
            d1: { lagnaRashi: d1LagnaRashi, houses: d1Houses },
            d9: { lagnaRashi: d9LagnaRashi, houses: d9Houses },
            chandra: { lagnaRashi: moonRashi, houses: moonHouses },
            positions: mockPositions,
            avakahada: {
                lagna: lagnaRashiName,
                rashi: moonRashiName,
                nakshatra: nakData.name,
                nakLord: nakData.lord,
                yoni: nakData.yoni,
                gana: nakData.gana,
                nadi: nakData.nadi,
                varna: ["ब्राह्मण", "क्षत्रिय", "वैश्य", "शूद्र"][moonRashi % 4],
                vashya: ["चतुष्पद", "मानव", "जलचर", "वनचर"][moonRashi % 4]
            },
            dosha: this.calculateDoshas(mockPositions, d1Houses),
            dasha: this.calculateVimshottari(mockPositions.Moon),
            bhavDetails: BHAV_DETAILS,
            planetFaladesh: PLANET_FALADESH
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
        const isKaalSarp = Math.abs(positions.Rahu - positions.Ketu) >= 170;

        return { isManglik, marsHouse, isSadeSati, isKaalSarp };
    }

    calculateVimshottari(moonDegree) {
        const nakshatraSpan = 360 / 27;
        const nakshatraIndex = Math.floor(moonDegree / nakshatraSpan);
        const lordIndex = nakshatraIndex % 9;
        
        // Full 120-year chronological timeline
        const fullTimeline = [];
        let curYear = this.birthDateTime.getFullYear();
        for (let i = 0; i < 9; i++) {
            const idx = (lordIndex + i) % 9;
            const lord = DASHA_LORDS[idx];
            fullTimeline.push({
                lord: lord.nameHi,
                planet: lord.planet,
                startYear: curYear,
                endYear: curYear + lord.years,
                duration: `${lord.years} वर्ष`
            });
            curYear += lord.years;
        }

        return {
            startingLord: DASHA_LORDS[lordIndex],
            nakshatraNum: nakshatraIndex + 1,
            timeline: fullTimeline
        };
    }
}
