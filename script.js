var sketch = document.getElementById("sketch")


let columns 
//function that change the number of squares inside the sketchtable
function sketchTable(columns){
    
    let round = 0
    let count = Math.pow(columns, 2)
    while (round < count) {
        var gridTable = document.createElement("div");
        gridTable.className = "square";
        gridTable.setAttribute("id", `square${round}` )
    sketch.appendChild(gridTable);
        round ++ ;
    }
    sketch.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    sketch.style.gridTemplateRows = `repeat(${columns}, 1fr)`;
}
//function that make the hovering
function hovering(){        
    var squareElements = document.querySelectorAll(".square");
    
        squareElements.forEach(function(div) {
        div.addEventListener("mouseenter", function() {
        div.style.backgroundColor = 'lightcoral';
            });
            })
    }
//function that select the color background
//code neede for the ratio buttons works 
var smallSketch = document.getElementById("smallSkech");
    smallSketch.addEventListener("click", function() {
        var squares = document.querySelectorAll(".square");
            squares.forEach(function(square) {
            sketch.removeChild(square);
            });
        sketchTable(10);
        hovering();
    });
var mediumSketch = document.getElementById("mediumSkech");
    mediumSketch.addEventListener("click", function() {
        var squares = document.querySelectorAll(".square");
            squares.forEach(function(square) {
            sketch.removeChild(square);
            });
        sketchTable(20);
        hovering();
    });
var bigSketch = document.getElementById("bigSkech");
    bigSketch.addEventListener("click", function() {
        var squares = document.querySelectorAll(".square");
            squares.forEach(function(square) {
            sketch.removeChild(square);
            });           
        sketchTable(50);
        hovering();
    });
