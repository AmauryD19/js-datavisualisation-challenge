/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 
Your name : Dotrice Amaury 
Date :  
Contact information : 
What does this script do ? 
...
*/

// Your scripting goes here...
/* Premier graph */

/* Création de la div tabdiv */
var div = document.createElement("div");
div.id = "tabdiv";
var container = document.getElementById("mw-content-text");

container.insertBefore(div, table1);

/* Les variables */
var data = [];
var table = document.getElementById("table1");
var years = table.getElementsByTagName("tr")[1].getElementsByTagName("th");
var yearsArray = [];


for (let i = 1; i < years.length; i++) {
    let content = years[i].innerHTML;
    yearsArray.push(content);
}

var rows = table.getElementsByTagName("tr");

for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName("td");

    for (let j = 0; j < cells.length; j++) {
        if (j === 0) {
            var pays = cells[j].innerHTML;
        } else if (!isNaN(parseInt(cells[j].innerHTML))) {
            data.push({ data: parseInt(cells[j].innerHTML), pays: pays, years: yearsArray[j - 1] });
        }

    }
}

var svg = dimple.newSvg("#tabdiv", "100%", 450);
var myChart = new dimple.chart(svg, data);
myChart.setBounds(30, 110, "90%", 305);
var x = myChart.addCategoryAxis("x", ["years", "pays"]);
var y = myChart.addMeasureAxis("y", "data");
y.ticks = 20;
myChart.addSeries("pays", dimple.plot.line);
myChart.addSeries("pays", dimple.plot.scatter);
myChart.addLegend(10, 10, "100%", 200);
myChart.draw();

/* Deuxième graph */

var div = document.createElement("div");
div.id = "tabdiv2";
var container = document.getElementById("mw-content-text");

container.insertBefore(div, table2);

var data = [];
var table = document.getElementById("table2");
var years = table.getElementsByTagName("tr")[0].getElementsByTagName("th");
var yearsArray = [];

for (let i = 1; i < years.length; i++) {
    let content = years[i].innerHTML;
    yearsArray.push(content);
}

var rows = table.getElementsByTagName("tr");

for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName("td");

    for (let j = 0; j < cells.length; j++) {
        if (j === 0) {
            var pays = cells[j].innerHTML;
        } else if (!isNaN(parseInt(cells[j].innerHTML))) {
            data.push({ data: parseInt(cells[j].innerHTML), pays: pays, years: yearsArray[j - 1] });
        }

    }
}

var myChart = new dimple.chart(dimple.newSvg("#tabdiv2", "100%", 550), data);
myChart.setBounds(35, 180, "90%", 305);
var x = myChart.addCategoryAxis("x", ["years", "pays"]);
x.addOrderRule("years", false);
var y = myChart.addMeasureAxis("y", "data");
y.ticks = 15;
myChart.addSeries("pays", dimple.plot.bubble);
myChart.addSeries("pays", dimple.plot.scatter);
myChart.addLegend(10, 10, "100%", 200);
myChart.draw();