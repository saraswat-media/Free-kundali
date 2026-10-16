// उत्तर भारतीय (Diamond) कुण्डली SVG रेंडरर
function renderNorthIndianChart(chartData, lang = 'hi') {
    const pNames = lang === 'hi' ? PLANET_NAMES_HI : PLANET_NAMES_EN;
    const h = chartData.houses;
    const lRashi = chartData.lagnaRashi;

    const pos = {
        1: { x: 200, y: 145 }, 2: { x: 105, y: 65 },  3: { x: 55, y: 125 },
        4: { x: 130, y: 200 }, 5: { x: 55, y: 275 },  6: { x: 105, y: 335 },
        7: { x: 200, y: 255 }, 8: { x: 295, y: 335 }, 9: { x: 345, y: 275 },
        10: { x: 270, y: 200 }, 11: { x: 345, y: 125 }, 12: { x: 295, y: 65 }
    };

    let innerContent = "";
    for (let i = 1; i <= 12; i++) {
        const rashiNum = ((lRashi + i - 1) % 12) + 1;
        const pList = (h[i] || []).map(p => pNames[p.planet] || p.planet).join(" ");
        innerContent += `
            <text x="${pos[i].x}" y="${pos[i].y - 12}" font-size="11" fill="#b45309" font-weight="bold" text-anchor="middle">${rashiNum}</text>
            <text x="${pos[i].x}" y="${pos[i].y + 7}" font-size="11" fill="#1e293b" font-weight="600" text-anchor="middle">${pList}</text>
        `;
    }

    return `
    <svg viewBox="0 0 400 400" class="w-full max-w-sm sm:max-w-md mx-auto shadow-md rounded-xl bg-orange-50/70 border-2 border-amber-800">
        <rect x="10" y="10" width="380" height="380" fill="none" stroke="#78350f" stroke-width="2.5"/>
        <line x1="10" y1="10" x2="390" y2="390" stroke="#78350f" stroke-width="1.8"/>
        <line x1="390" y1="10" x2="10" y2="390" stroke="#78350f" stroke-width="1.8"/>
        <polygon points="200,10 390,200 200,390 10,200" fill="none" stroke="#78350f" stroke-width="1.8"/>
        ${innerContent}
    </svg>`;
}
