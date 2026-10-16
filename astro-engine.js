// Detailed Vedic Astrology Engine with Degrees, Planetary Details & Full Content
const RASHIS_HI = ["मेष", "वृषभ", "मिथुन", "कर्क", "सिंह", "कन्या", "तुला", "वृश्चिक", "धनु", "मकर", "कुंभ", "मीन"];
const RASHIS_EN = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

const PLANET_NAMES_HI = { Sun: "सूर्य", Moon: "चन्द्र", Mars: "मंगल", Mercury: "बुध", Jupiter: "गुरु", Venus: "शुक्र", Saturn: "शनि", Rahu: "राहु", Ketu: "केतु", Asc: "लग्न" };
const PLANET_NAMES_EN = { Sun: "Sun", Moon: "Moon", Mars: "Mars", Mercury: "Mercury", Jupiter: "Jupiter", Venus: "Venus", Saturn: "Saturn", Rahu: "Rahu", Ketu: "Ketu", Asc: "Asc" };

const NAKSHATRAS = [
    { name: "अश्विनी", lord: "केतु", yoni: "अश्व", gana: "देव", nadi: "आद्य" },
    { name: "भरणी", lord: "शुक्र", yoni: "गज", gana: "मनुष्य", nadi: "मध्य" },
    { name: "कृत्तिका", lord: "सूर्य", yoni: "मेष", gana: "राक्षस", nadi: "अन्त्य" },
    { name: "रोहिणी", lord: "चन्द्र", yoni: "सर्प", gana: "मनुष्य", nadi: "अन्त्य" },
    { name: "मृगशिरा", lord: "मंगल", yoni: "सर्प", gana: "देव", nadi: "मध्य" },
    { name: "आर्द्रा", lord: "राहु", yoni: "श्वान", gana: "मनुष्य", nadi: "आद्य" },
    { name: "पुनर्वसु", lord: "गुरु", yoni: "मार्जार", gana: "देव", nadi: "आद्य" },
    { name: "पुष्य", lord: "शनि", yoni: "मेष", gana: "देव", nadi: "मध्य" },
    { name: "आश्लेषा", lord: "बुध", yoni: "मार्जार", gana: "राक्षस", nadi: "अन्त्य" },
    { name: "मघा", lord: "केतु", yoni: "मूषक", gana: "राक्षस", nadi: "आद्य" },
    { name: "पूर्वाफाल्गुनी", lord: "शुक्र", yoni: "मूषक", gana: "मनुष्य", nadi: "मध्य" },
    { name: "उत्तराफाल्गुनी", lord: "सूर्य", yoni: "गौ", gana: "मनुष्य", nadi: "अन्त्य" },
    { name: "हस्त", lord: "चन्द्र", yoni: "महिष", gana: "देव", nadi: "आद्य" },
    { name: "चित्रा", lord: "मंगल", yoni: "व्याघ्र", gana: "राक्षस", nadi: "मध्य" },
    { name: "स्वाती", lord: "राहु", yoni: "महिष", gana: "देव", nadi: "अन्त्य" },
    { name: "विशाखा", lord: "गुरु", yoni: "व्याघ्र", gana: "राक्षस", nadi: "अन्त्य" },
    { name: "अनुराधा", lord: "शनि", yoni: "मृग", gana: "देव", nadi: "मध्य" },
    { name: "ज्येष्ठा", lord: "बुध", yoni: "मृग", gana: "राक्षस", nadi: "आद्य" },
    { name: "मूल", lord: "केतु", yoni: "श्वान", gana: "राक्षस", nadi: "आद्य" },
    { name: "पूर्वाषाढ़ा", lord: "शुक्र", yoni: "वानर", gana: "मनुष्य", nadi: "मध्य" },
    { name: "उत्तराषाढ़ा", lord: "सूर्य", yoni: "नकुल", gana: "मनुष्य", nadi: "अन्त्य" },
    { name: "श्रवण", lord: "चन्द्र", yoni: "वानर", gana: "देव", nadi: "अन्त्य" },
    { name: "धनिष्ठा", lord: "मंगल", yoni: "सिंह", gana: "राक्षस", nadi: "मध्य" },
    { name: "शतभिषा", lord: "राहु", yoni: "अश्व", gana: "राक्षस", nadi: "आद्य" },
    { name: "पूर्वाभाद्रपद", lord: "गुरु", yoni: "सिंह", gana: "मनुष्य", nadi: "आद्य" },
    { name: "उत्तराभाद्रपद", lord: "शनि", yoni: "गौ", gana: "मनुष्य", nadi: "मध्य" },
    { name: "रेवती", lord: "बुध", yoni: "गज", gana: "देव", nadi: "अन्त्य" }
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
    { 
        num: 1, name: "प्रथम भाव (तनु भाव / लग्न)", topic: "शारीरिक संरचना, स्वभाव, स्वास्थ्य, आत्मबल एवं व्यक्तित्व", 
        fal: "प्रथम भाव जातक के जीवन का केंद्र बिंदु है। यह जातक के समग्र स्वास्थ्य, दृष्टिकोण, आत्मविश्वास और निर्णय लेने की क्षमता को निर्धारित करता है। इस भाव के शुभ प्रभाव से जातक आकर्षक व्यक्तित्व, तेजस्वी स्वभाव और समाज में विशिष्ट सम्मान प्राप्त करता है। जातक में स्वाभाविक नेतृत्व क्षमता होती है तथा वह विपरीत परिस्थितियों में भी धैर्य बनाए रखता है।" 
    },
    { 
        num: 2, name: "द्वितीय भाव (धन भाव)", topic: "पैतृक धन, वाणी, कुटुंब, संचित पूंजी एवं खान-पान", 
        fal: "द्वितीय भाव जातक की आर्थिक सुदृढ़ता, संचित धन और पारिवारिक सुख को दर्शाता है। यह वाणी का भाव भी है। इस भाव के प्रभाव से जातक मधुरभाषी, स्पष्ट वक्ता और परिवार का स्नेही होता है। जीवन में धनार्जन के निरंतर अवसर प्राप्त होते हैं तथा पैतृक संपत्ति का पूर्ण लाभ मिलता है। वित्तीय प्रबंधन में जातक कुशल रहता है।" 
    },
    { 
        num: 3, name: "तृतीय भाव (सहज भाव / पराक्रम)", topic: "पराक्रम, साहस, छोटे भाई-बहन, पुरुषार्थ एवं संचार", 
        fal: "तृतीय भाव जातक के बाहुबल, पराक्रम और संघर्ष क्षमता का प्रतीक है। यह दर्शाता है कि जातक अपने परिश्रम के बल पर भाग्य का निर्माण करेगा। छोटे भाई-बहनों के साथ सहयोग बना रहता है। लेखन, संचार, मीडिया, तकनीक एवं विपणन के क्षेत्र में जातक को विशेष सफलता प्राप्त होती है। यात्राएं फलदायी सिद्ध होती हैं।" 
    },
    { 
        num: 4, name: "चतुर्थ भाव (सुख भाव / मातृ भाव)", topic: "माता, भूमि, भवन, वाहन, गृहस्थ सुख एवं मानसिक शांति", 
        fal: "चतुर्थ भाव जीवन के भौतिक सुख-साधनों और आंतरिक संतोष का केंद्र है। शुभ ग्रहों के प्रभाव से जातक को उत्तम भवन, चौपहिया वाहन और अचल संपत्ति का श्रेष्ठ सुख प्राप्त होता है। माता से विशेष स्नेह एवं आशीर्वाद प्राप्त होता है। पैतृक आवास सुखद रहता है और जातक का मन शांत व परोपकारी रहता है।" 
    },
    { 
        num: 5, name: "पंचम भाव (सुत भाव / ज्ञान भाव)", topic: "संतान, उच्च विद्या, बुद्धि, पूर्व जन्म के पुण्य एवं मंत्र सिद्धि", 
        fal: "पंचम भाव पूर्व जन्म के संचित पुण्यों और ज्ञान का भाव है। यह जातक को कुशाग्र बुद्धि, उत्कृष्ट तर्कशक्ति और रचनात्मक दृष्टिकोण प्रदान करता है। शिक्षा के क्षेत्र में उच्च पद एवं उपलब्धियां प्राप्त होती हैं। संतान आज्ञाकारी, गुणवान और कुल का नाम रोशन करने वाली होती है। आकस्मिक लाभ व शेयर बाजार में समझदारी से लाभ संभव है।" 
    },
    { 
        num: 6, name: "षष्ठ भाव (रिपु भाव / रोग भाव)", topic: "शत्रु, रोग, ऋण, प्रतिस्पर्धा, कोर्ट-कचहरी एवं सेवा भाव", 
        fal: "षष्ठ भाव जीवन की चुनौतियों, प्रतिस्पर्धा और विजय का भाव है। यदि इस भाव में शुभ या बली ग्रह हों तो जातक अपने शत्रुओं पर विजय पाता है। प्रतियोगी परीक्षाओं में सफलता प्राप्त होती है। जातक कर्जमुक्त जीवन व्यतीत करता है और कठिन परिस्थितियों से बाहर निकलने की अद्भुत क्षमता रखता है। स्वास्थ्य के प्रति सचेत रहना लाभकारी रहता है।" 
    },
    { 
        num: 7, name: "सप्तम भाव (कलत्र भाव / जाया भाव)", topic: "विवाह, जीवनसाथी, साझेदारी, व्यापार एवं सामाजिक प्रतिष्ठा", 
        fal: "सप्तम भाव दांपत्य जीवन और व्यापारिक साझेदारियों का दर्पण है। यह भाव जीवनसाथी के गुण, स्वभाव और सहयोग को निर्धारित करता है। जीवनसाथी सुशिक्षित, समझदार और भाग्यशाली सिद्ध होता है। व्यापार में साझेदारी से लाभ और सार्वजनिक जीवन में मान-सम्मान प्राप्त होता है। विदेश यात्राओं के योग भी बनते हैं।" 
    },
    { 
        num: 8, name: "अष्टम भाव (आयु भाव / रंध्र भाव)", topic: "दीर्घायु, गुप्त धन, आकस्मिक घटनाएं, शोध एवं गूढ़ विज्ञान", 
        fal: "अष्टम भाव आयु, वसीयत और गूढ़ रहस्यों का कारक है। यह जातक को दीर्घायु और आंतरिक आत्मबल प्रदान करता है। जातक की रुचि ज्योतिष, गूढ़ विद्या, शोध और आध्यात्मिक साधना में होती है। आकस्मिक धन लाभ और बीमा या पैतृक संपत्ति से अप्रत्याशित सहयोग मिलने के सुंदर योग बनते हैं।" 
    },
    { 
        num: 9, name: "नवम भाव (भाग्य भाव / धर्म भाव)", topic: "भाग्य, धर्म, पिता, गुरु, उच्च विचार एवं तीर्थ यात्राएं", 
        fal: "नवम भाव कुंडली का सर्वाधिक शुभ त्रिकोण स्थान है। भाग्य की प्रबलता से जातक कम प्रयास में भी उत्तम परिणाम प्राप्त करता है। जातक धार्मिक विचारों वाला, गुरुजनों और पिता का आदर करने वाला होता है। जीवन में तीर्थ यात्राएं और सत्संग के अवसर मिलते हैं। ईश्वरीय कृपा सदैव जातक के साथ बनी रहती है।" 
    },
    { 
        num: 10, name: "दशम भाव (कर्म भाव / राज्य भाव)", topic: "करियर, आजीविका, पद-प्रतिष्ठा, प्रशासनिक सम्मान एवं अधिकार", 
        fal: "दशम भाव जातक की कार्यकुशलता, सामाजिक प्रतिष्ठा और आजीविका का निर्णायक है। इस भाव की मजबूती जातक को प्रतिष्ठित अधिकारी, कुशल व्यापारी या सामाजिक नेतृत्वकर्ता बनाती है। जातक अपने कार्यक्षेत्र में निष्ठावान रहता है और शासन-प्रशासन से विशेष सम्मान व पुरस्कार प्राप्त करता है।" 
    },
    { 
        num: 11, name: "एकादश भाव (लाभ भाव / आय भाव)", topic: "नियमित आय, इच्छा पूर्ति, बड़े भाई-बहन एवं मित्र मंडली", 
        fal: "एकादश भाव जीवन की समस्त भौतिक इच्छाओं और आय के स्रोतों का प्रतीक है। जातक के पास आय के एक से अधिक साधन होते हैं। समाज के प्रतिष्ठित और प्रभावशाली लोगों से घनिष्ठ संबंध बनते हैं। बड़े भाई-बहनों का पूर्ण सहयोग मिलता है। जातक जो भी संकल्प लेता है, उसमें अंततः सफलता और समृद्धि पाता है।" 
    },
    { 
        num: 12, name: "द्वादश भाव (व्यय भाव / मोक्ष भाव)", topic: "विदेश गमन, खर्च, दान-पुण्य, शयन सुख एवं मोक्ष", 
        fal: "द्वादश भाव परोपकार, विदेश संपर्कों और आध्यात्मिक मुक्ति का भाव है। शुभ प्रभाव से जातक धार्मिक कार्यों, यज्ञ और समाज कल्याण में धन व्यय करता है। विदेशों या दूरस्थ स्थानों से व्यापारिक व आजीविका के संबंध स्थापित होते हैं। जातक का अंतःकरण शुद्ध रहता है और वह मोक्ष प्राप्ति की दिशा में अग्रसर होता है।" 
    }
];

const PLANET_FALADESH = {
    Sun: "सूर्य आत्मकारक ग्रह है। आपकी कुंडली में सूर्य की स्थिति जातक को स्वाभिमान, नेतृत्व क्षमता, सरकारी तंत्र से लाभ तथा दृढ़ व्यक्तित्व प्रदान करती है। पिता के साथ संबंध और शारीरिक ऊर्जा में सूर्य की मुख्य भूमिका रहती है। नित्य प्रातः सूर्य को तांबे के लोटे से अर्घ्य देना अति शुभ फलदायी रहेगा।",
    Moon: "चन्द्रमा मन, माता और मानसिक शांति का स्वामी है। अनुकूल चन्द्रमा जातक को संवेदनशील, शांत चित्त, कलात्मक सोच और जनता के बीच लोकप्रिय बनाता है। जल तत्व और तरल पदार्थों के व्यापार में लाभ मिलता है। चांदी के पात्र में जल पीना और माता का आशीर्वाद लेना मानसिक शांति बढ़ाएगा।",
    Mars: "मंगल साहस, रक्त, भूमि और पराक्रम का कारक है। मंगल की स्थिति जातक को साहसी, त्वरित निर्णय लेने वाला, सेना/पुलिस/इंजीनियरिंग में दक्ष और संपत्ति का स्वामी बनाती है। मंगल दोष निवारण हेतु मंगलवार को हनुमान चालीसा का पाठ तथा लाल मसूर की दाल का दान शुभ रहता है।",
    Mercury: "बुध वाणी, तर्क, गणित, व्यापार और हास्य-विनोद का स्वामी है। मजबूत बुध जातक को तीव्र स्मरण शक्ति, चतुर व्यापारी, उत्कृष्ट लेखक तथा वित्तीय मामलों में अत्यधिक निपुण बनाता है। बुधवार को गौमाता को हरा चारा खिलाना तथा तुलसी दल का सेवन बुद्धि व व्यापार में वृद्धि कराता है।",
    Jupiter: "गुरु (बृहस्पति) ज्ञान, धर्म, संतान, धन और भाग्य का नैसर्गिक शुभ ग्रह है। कुंडली में गुरु का प्रभाव जातक को विद्वान, नैतिक, सलाहकार, समाज में अत्यंत प्रतिष्ठित और ऐश्वर्यवान बनाता है। गुरुवार को केसर का तिलक लगाना और विष्णु सहस्रनाम का पाठ ज्ञान व धन की वर्षा करता है।",
    Venus: "शुक्र भौतिक सुख-सुविधा, वाहन, सौंदर्य, प्रेम, विवाह और कलात्मक प्रतिभा का कारक है। शुक्र का अनुकूल प्रभाव जातक को आकर्षक व्यक्तित्व, विलासिता पूर्ण जीवनशैली और वैवाहिक सौहार्द प्रदान करता है। शुक्रवार को श्वेत वस्तुओं का दान और माता लक्ष्मी की उपासना दांपत्य सुख बढ़ाती है।",
    Saturn: "शनि न्याय, कर्म, धैर्य, अनुशासन और दीर्घायु के अधिष्ठाता हैं। शनि व्यक्ति को कठोर परिश्रम से तपाकर स्थाई सफलता, प्रशासनिक दक्षता, जनसमर्थन और स्थिर संपत्ति का वरदान देते हैं। शनिवार को पीपल के नीचे सरसों के तेल का दीपक जलाना और निर्धनों की सेवा करना शनि कृपा दिलाता है।",
    Rahu: "राहु आकस्मिक उन्नति, तकनीकी क्षेत्र, विदेशी संपर्क, राजनीति और कूटनीति का कारक है। अनुकूल राहु जातक को तीव्र कूटनीतिक बुद्धि, इंटरनेट व डिजिटल मीडिया में अप्रत्याशित सफलता दिलाता है। राहु की शांति के लिए भगवान शिव का जलाभिषेक और पक्षियों को बाजरा डालना लाभकारी है।",
    Ketu: "केतु मोक्ष, वैराग्य, शोध और आध्यात्मिक अंतर्दृष्टि का प्रतीक है। केतु जातक को पारलौकिक ज्ञान, शल्य चिकित्सा, कोडिंग व रिसर्च के क्षेत्र में विलक्षण अंतर्ज्ञान प्रदान करता है। गणेश अथर्वशीर्ष का पाठ और कुत्तों को भोजन कराना केतु के शुभ फल प्रदान करता है।"
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

        // Planetary Details Table Array
        const planetaryTable = [];

        Object.keys(mockPositions).forEach(planet => {
            const degTotal = mockPositions[planet];
            const rashi = Math.floor(degTotal / 30);
            const degInRashi = degTotal % 30;
            const degFloor = Math.floor(degInRashi);
            const minFloor = Math.floor((degInRashi - degFloor) * 60);

            let houseNum = ((rashi - d1LagnaRashi + 12) % 12) + 1;
            d1Houses[houseNum].push({
                planet: planet,
                degree: `${degFloor}° ${minFloor}'`,
                rashiIndex: rashi
            });

            // Nakshatra calculation for this planet
            const nakSpan = 360 / 27;
            const pNakIdx = Math.floor(degTotal / nakSpan) % 27;
            const charan = Math.floor((degTotal % nakSpan) / (nakSpan / 4)) + 1;

            planetaryTable.push({
                planet: PLANET_NAMES_HI[planet] || planet,
                rashi: RASHIS_HI[rashi],
                degrees: `${degFloor}° ${minFloor}'`,
                house: houseNum,
                nakshatra: NAKSHATRAS[pNakIdx].name,
                charan: charan,
                lord: NAKSHATRAS[pNakIdx].lord,
                state: (degFloor > 6 && degFloor < 24) ? "युवा" : (degFloor <= 6 ? "बाल" : "वृद्ध")
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

        // Chandra Kundali
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
        const nakIndex = Math.floor(mockPositions.Moon / nakSpan) % 27;
        const nakData = NAKSHATRAS[nakIndex];

        return {
            d1: { lagnaRashi: d1LagnaRashi, houses: d1Houses },
            d9: { lagnaRashi: d9LagnaRashi, houses: d9Houses },
            chandra: { lagnaRashi: moonRashi, houses: moonHouses },
            positions: mockPositions,
            planetaryTable: planetaryTable,
            avakahada: {
                lagna: RASHIS_HI[d1LagnaRashi],
                rashi: RASHIS_HI[moonRashi],
                nakshatra: nakData.name,
                nakLord: nakData.lord,
                charan: Math.floor((mockPositions.Moon % nakSpan) / (nakSpan / 4)) + 1,
                yoni: nakData.yoni,
                gana: nakData.gana,
                nadi: nakData.nadi,
                varna: ["ब्राह्मण", "क्षत्रिय", "वैश्य", "शूद्र"][moonRashi % 4],
                vashya: ["चतुष्पद", "मानव", "जलचर", "वनचर"][moonRashi % 4],
                tatva: ["अग्नि", "पृथ्वी", "वायु", "जल"][moonRashi % 4],
                luckyNumber: [1, 3, 5, 7, 9][moonRashi % 5],
                luckyColor: ["केसरिया", "श्वेत", "पीला", "लाल", "हरा"][moonRashi % 5],
                luckyDay: ["रविवार", "सोमवार", "मंगलवार", "गुरुवार"][moonRashi % 4]
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
        const nakshatraIndex = Math.floor(moonDegree / nakshatraSpan) % 27;
        const lordIndex = nakshatraIndex % 9;
        
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
