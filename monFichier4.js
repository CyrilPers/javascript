let paysData;
let countriesFlag;



function initialiserDonnees() {
    Promise.all([
        fetch('https://digicode.cleverapps.io/json/pays/pollution').then(res => res.json()),
        fetch('https://restcountries.com/v2/all').then(res => res.json())
    ])
        .then(([polution, countriesData]) => {
            paysData = polution.pays;
            countriesFlag = countriesData;
            loadTitle(polution);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function loadTitle(data) {
    const title = document.getElementById("titre");
    title.innerHTML = data.polluant + ' ' + data.unite;

    const annee = document.getElementById("annee");
    annee.innerHTML = data.annee;
    loadTable(data.pays)
}

function loadTable(paysData) {

    const tableTitle = document.getElementById("corps");
    const pays = paysData.map(pays => {
        const country = countriesFlag.find(country => country.alpha2Code.toLowerCase() === pays.code.toLowerCase());
        const flag = country.flag;
        return `
                    <tr>
                        <td><img style="height: 20px; width: auto;" src="${flag}" alt="${pays.nom}"></td>
                        <td>${pays.nom}</td>
                        <td>${pays.valeur}</td>
                        <td>${pays.pourcentage}</td>
                    </tr>`
    }).join("");

    tableTitle.innerHTML = pays;
}

function calculer() {
    const minInput = document.getElementById("min")
    const maxInput = document.getElementById("max")
    let min = parseFloat(document.getElementById("min").value);
    let max = parseFloat(document.getElementById("max").value);
    if (min > max) alert('La valeur minimum doit être inférieure à la valeur maximum');
    if (min < 0 || max < 0) alert('Veuillez rentrer des valeurs positives');
    if (min == null) {
        min = 0
        minInput.value = min;
    };
    if (max == null) {
        max = Number.MAX_VALUE;
        maxInput.value = max;
    };
    const paysToLoad = paysData.filter(pays => pays.valeur >= min && pays.valeur <= max);
    loadTable(paysToLoad);
}
