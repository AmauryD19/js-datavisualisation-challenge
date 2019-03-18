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
var div = document.createElement("div"); //Création et placement de la div contenant le premier tableau
div.id = "tabdiv";
var container = document.getElementById("mw-content-text");
container.insertBefore(div, table1);

/* Les variables */
var data = []; //Array contenant les données
var table = document.getElementById("table1");
var years = table.getElementsByTagName("tr")[1].getElementsByTagName("th");
var yearsArray = []; //Array contenant les années
var rows = table.getElementsByTagName("tr");

/* Données du premier graph */
for (let i = 1; i < years.length; i++) { //Ici je push les années dans l'array
    let allYears = years[i].innerHTML;
    yearsArray.push(allYears);
}

for (let i = 1; i < rows.length; i++) { //Ici push les données dans 
    let allData = rows[i].getElementsByTagName("td");

    for (let j = 0; j < allData.length; j++) { //Ici si j est 0 la variable pays sera le nom du pays
        if (j === 0) {
            var pays = allData[j].innerHTML;
        } else if (!isNaN(parseInt(allData[j].innerHTML))) { //Ici si j n'est pas 0 on push un objet dans l'array Data contenant toutes les informations
            data.push({ data: parseInt(allData[j].innerHTML), pays: pays, years: yearsArray[j - 1] });
        }
    }
}

/* Création du second graph */

/* Création du bloc du second graph */
var svg = dimple.newSvg("#tabdiv", "100%", 450);
var myChart = new dimple.chart(svg, data);
myChart.setBounds(30, 110, "90%", 305);
var x = myChart.addCategoryAxis("x", ["years", "pays"]);
var y = myChart.addMeasureAxis("y", "data");
y.ticks = 20;
myChart.addSeries("pays", dimple.plot.line);
myChart.addSeries("pays", dimple.plot.bubble);
myChart.addLegend(10, 10, "100%", 200);
myChart.draw();

/* Deuxième graph : même démarche que pour le premier graph */

var div = document.createElement("div");
div.id = "tabdiv2";
var container = document.getElementById("mw-content-text");
container.insertBefore(div, table2);

/* Les variables */
var data = [];
var table = document.getElementById("table2");
var years = table.getElementsByTagName("tr")[0].getElementsByTagName("th");
var yearsArray = [];
var rows = table.getElementsByTagName("tr");

/* Donnée du second graph*/
for (let i = 1; i < years.length; i++) {
    let allYears = years[i].innerHTML;
    yearsArray.push(allYears);
}

for (let i = 1; i < rows.length; i++) {
    let allData = rows[i].getElementsByTagName("td");

    for (let j = 0; j < allData.length; j++) {
        if (j === 0) {
            var pays = allData[j].innerHTML;
        } else if (!isNaN(parseInt(allData[j].innerHTML))) {
            data.push({ data: parseInt(allData[j].innerHTML), pays: pays, years: yearsArray[j - 1] });
        }
    }
}

/* Création du second graph */
var myChart = new dimple.chart(dimple.newSvg("#tabdiv2", "100%", 550), data);
myChart.setBounds(35, 180, "90%", 305);
var x = myChart.addCategoryAxis("x", ["years", "pays"]);
x.addOrderRule("years", false);
var y = myChart.addMeasureAxis("y", "data");
y.ticks = 15;
myChart.addSeries("pays", dimple.plot.bubble);
myChart.addLegend(10, 10, "100%", 200);
myChart.draw();

/* Je n'ai pas réussi à implémenter le second graphique tout en gardant des "let".
De base je n'utilisais "var" que pour la pays, dans la boucle j === 0, car cela ne fonctionnait pas autrement et je n'ai pas trouvé de solution autre que l'utilisation de "var".
Quand j'utilisais "let", tout fonctionne parfaitement pour le premier graphique, mais quand j'ajoute le second rien ne va plus. J'ai essayé de changer le nom des variables
mais cela n'a rien changé, probablement une faute d'inattention venant de ma part, mais je n'arrive pas à mettre le doigt dessus je suis donc resté sur des "var". */