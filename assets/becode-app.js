/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 
Your name : Dotrice Amaury 
Date : 19/03/2018
Contact information : 
What does this script do ? 
...
*/

// Your scripting goes here...
/* Premier graph */

/* Création du bloc du premier graph */
div = document.createElement("div"); //Création et placement de la div contenant le premier tableau
div.id = "tabdiv";
container = document.getElementById("mw-content-text");
container.insertBefore(div, table1);

/* Les ables */
data = []; //Array contenant les données
table = document.getElementById("table1");
years = table.getElementsByTagName("tr")[1].getElementsByTagName("th");
yearsArray = []; //Array contenant les années
rows = table.getElementsByTagName("tr");

/* Données du premier graph */
for (i = 1; i < years.length; i++) { //Ici je push les années dans l'array
    allYears = years[i].innerHTML;
    yearsArray.push(allYears);
}

for (i = 1; i < rows.length; i++) { //Ici push les données dans 
    allData = rows[i].getElementsByTagName("td");

    for (j = 0; j < allData.length; j++) { //Ici si j est 0 la varable pays sera le nom du pays
        if (j === 0) {
            pays = allData[j].innerHTML;
        } else if (!isNaN(parseInt(allData[j].innerHTML))) { //Ici si j n'est pas 0 on push un objet dans l'array Data contenant toutes les informations
            data.push({ data: parseInt(allData[j].innerHTML), pays: pays, years: yearsArray[j - 1] });
        }
    }
}

/* Création du second graph, même démarche que pour le premier */

svg = dimple.newSvg("#tabdiv", "100%", 450);
myChart = new dimple.chart(svg, data);
myChart.setBounds(30, 110, "90%", 305);
x = myChart.addCategoryAxis("x", ["years", "pays"]);
y = myChart.addMeasureAxis("y", "data");
y.ticks = 20;
myChart.addSeries("pays", dimple.plot.line);
myChart.addSeries("pays", dimple.plot.bubble);
myChart.addLegend(10, 10, "100%", 200);
myChart.draw();

div = document.createElement("div");
div.id = "tabdiv2";
container = document.getElementById("mw-content-text");
container.insertBefore(div, table2);

data = [];
table = document.getElementById("table2");
years = table.getElementsByTagName("tr")[0].getElementsByTagName("th");
yearsArray = [];
rows = table.getElementsByTagName("tr");

for (i = 1; i < years.length; i++) {
    allYears = years[i].innerHTML;
    yearsArray.push(allYears);
}

for (i = 1; i < rows.length; i++) {
    allData = rows[i].getElementsByTagName("td");

    for (j = 0; j < allData.length; j++) {
        if (j === 0) {
            pays = allData[j].innerHTML;
        } else if (!isNaN(parseInt(allData[j].innerHTML))) {
            data.push({ data: parseInt(allData[j].innerHTML), pays: pays, years: yearsArray[j - 1] });
        }
    }
}

svg = dimple.newSvg("#tabdiv2", "100%", 550);
myChart = new dimple.chart(svg, data);
myChart.setBounds(35, 180, "90%", 305);
x = myChart.addCategoryAxis("x", ["years", "pays"]);
y = myChart.addMeasureAxis("y", "data");
y.ticks = 15;
myChart.addSeries("pays", dimple.plot.bubble);
myChart.addLegend(10, 10, "100%", 200);
myChart.draw();
/* Je n'ai pas réussi à implémenter le second graphique tout en utilisant des "let". Pour la variable years je suis obligé de passer de base par "var"
et non par "let" car sinon la variable pays n'est pas définie car probablement un conflit avec la première variable pays. Probablement un soucis
de nomenclature de ma part. J'ai donc supprimé les "var" et ça fonctionne, mais si je passe en "let" rien ne s'affiche. Même quand je corrige les
erreurs affichée dans la console rien ne fonctionne. J'ai supprimé les console.log une fois que tout était réglé.*/