var sketch = document.getElementById("sketch")


let columns 
function sketchTable(columns){
    
    let round = 0
    let count = Math.pow(columns, 2)
    while (round < count) {
        var gridTable = document.createElement("div");
        gridTable.className = "square";
    sketch.appendChild(gridTable);
        round ++ ;
    }
    sketch.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    sketch.style.gridTemplateRows = `repeat(${columns}, 1fr)`;
}

sketchTable(10)
