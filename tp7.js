const societe = {
    nom: "Google",
    siege_social: "Googleplex, Mountain View, California, United States",
    fondateurs: [
        {nom: "Larry Page", date_naissance: "26/03/1973", lieu_naissance: "East Lansing, Michigan"},
        {nom: "Sergey Brin", date_naissance: "21/08/1973", lieu_naissance: "Moscou, Union Soviétique"}
    ],
    chiffre_affaires: [
        {annee: "2008", ca: 16.49},
        {annee: "2012", ca: 37.97},
        {annee: "2016", ca: 89.46},
        {annee: "2018", ca: 136.2},
    ],
};


societe.fondateurs.forEach(fondateur => {
    console.log(fondateur.nom);
});


societe.chiffre_affaires.forEach(ca => {
    console.log(ca.annee + ' ' + ca.ca);
});