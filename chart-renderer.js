// Complete North Indian Diamond Kundali SVG Renderer (Fixed Dimensions for Perfect PDF)
function renderNorthIndianChart(chartData, lang = 'hi') {
    const pNames = lang === 'hi' ? PLANET_NAMES_HI : PLANET_NAMES_EN;
    const h = chartData.houses;
    const lRashi = chartData.lagnaRashi;

    // Fixed coordinates for 12 houses (400x400 viewBox)
    const pos = {
        1: { x: 200, y: 145 }, 2: { x: 105, y: 70 },  3: { x: 55, y: 125 },
        4: { x: 130, y: 200 }, 5: { x: 55, y: 275 },  6: { x: 105, y: 335 },
        7: { x: 200, y: 255 }, 8: { x: 295, y: 335 }, 9: { x: 345, y: 275 },
        10: { x: 270, y: 200 }, 11: { x: 345, y: 125 }, 12: { x: 295, y: 70 }
    };

    let innerContent = "";
    for (let i = 1; i <= 12; i++) {
        const rashiNum = ((lRashi + i - 1) % 12) + 1;
        const pList = (h[i] || []).map(p => pNames[p.planet] || p.planet).join(" ");
        innerContent += `
            <text x="${pos[i].x}" y="${pos[i].y - 12}" font-size="12" fill="#991b1b" font-weight="bold" text-anchor="middle">${rashiNum}</text>
            <text x="${pos[i].x}" y="${pos[i].y + 8}" font-size="12" fill="#1e293b" font-weight="700" text-anchor="middle">${pList}</text>
        `;
    }

    // Fixed width="360" height="360" prevents html2canvas from cutting the chart
    return `
    <div style="display:flex; justify-content:center; align-items:center; width:100%; margin: 12px 0;">
        <svg width="360" height="360" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style="background:#fffaf0; border:2.5px solid #78350f; border-radius:12px; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
            <rect x="10" y="10" width="380" height="380" fill="none" stroke="#78350f" stroke-width="2.5"/>
            <line x1="10" y1="10" x2="390" y2="390" stroke="#78350f" stroke-width="1.8"/>
            <line x1="390" y1="10" x2="10" y2="390" stroke="#78350f" stroke-width="1.8"/>
            <polygon points="200,10 390,200 200,390 10,200" fill="none" stroke="#78350f" stroke-width="1.8"/>
            ${innerContent}
        </svg>
    </div>`;
}
