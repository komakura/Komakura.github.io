function calculate() {
    const levels = 10;
    const rows = 8;
    let result = '';

    for (let i = 1; i <= rows; i++) {
        let rowResult = 0;
        for (let j = 1; j <= levels; j++) {
            let inputId = `row${i}-level${j}`;
            let inputValue = parseInt(document.getElementById(inputId).value) || 0;
            rowResult += inputValue;
        }
        result += `<p>€–Ú${i}‚Ì‡Œv: ${rowResult}</p>`;
    }

    document.getElementById('result').innerHTML = result;
}
