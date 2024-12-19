function initialiserDonnees() {
    Promise.all([
        fetch('https://digicode.cleverapps.io/json/pays/pollution').then(res => res.json()),
        fetch('https://restcountries.com/v2/all').then(res => res.json())
    ])
        .then(([pollutionData, countriesData]) => {
            loadTable(pollutionData, countriesData);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function loadTable(data, countries) {
    title = document.getElementById("titre");
    title.innerHTML = data.polluant + ' ' + data.unite;

    const annee = document.getElementById("annee");
    annee.innerHTML = data.annee;

    const tableTitle = document.getElementById("corps");
    console.log(data.pays);
    console.log(countries);
    const pays = data.pays.map(pays => {
        const country = countries.find(country => country.alpha2Code.toLowerCase() === pays.code.toLowerCase());
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