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
function getRandomColor(){
    const LIMIT_VALUE = 256;
    let red = getRandomNumber (LIMIT_VALUE);
    let green = getRandomNumber (LIMIT_VALUE);
    let blue = getRandomNumber (LIMIT_VALUE);
    return 'rgb('+red+','+green+','+blue+')';
}
function getRandomNumber(limitValue){
    let randomNumber = Math.random();
    randomNumber = randomNumber*limitValue;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}

//function that select the color background
function selectBackgroundColor(colorType){
    switch (colorType) {
        case "classicColor":
            return "black";
        case "randomColor":
            return getRandomColor();
        default:
            return "white"; // Default color
    }
}
//function that make the hovering
function hovering(){        
    var squareElements = document.querySelectorAll(".square");
    
        squareElements.forEach(function(div) {
        div.addEventListener("mouseenter", function() {
        var colorType = document.querySelector('input[name="colorType"]:checked').value;
        div.style.backgroundColor = selectBackgroundColor(colorType);
            });
            })
}

//code neede for the ratio buttons works 
var smallSketch = document.getElementById("smallSkech");
    smallSketch.addEventListener("click", function() {
        var squares = document.querySelectorAll(".square");
            squares.forEach(function(square) {
            sketch.removeChild(square);
            });
        sketchTable(20);
        hovering();
    });
var mediumSketch = document.getElementById("mediumSkech");
    mediumSketch.addEventListener("click", function() {
        var squares = document.querySelectorAll(".square");
            squares.forEach(function(square) {
            sketch.removeChild(square);
            });
        sketchTable(50);
        hovering();
    });

    
var bigSketch = document.getElementById("bigSkech");
    bigSketch.addEventListener("click", function() {
        var squares = document.querySelectorAll(".square");
            squares.forEach(function(square) {
            sketch.removeChild(square);
            });           
        sketchTable(80);
        hovering();
    });
