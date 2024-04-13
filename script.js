makeGrid(10);
function makeGrid (numberOfSquares) {
    for (let i = 0; i < numberOfSquares; i++) {
        const row = document.createElement("div");
        row.className = "row";
        const container = document.querySelector(".container");
        container.appendChild(row);
        for (let j = 1; j < numberOfSquares; j++) {
            const col = document.createElement("div");
            col.className = "column";
            row.appendChild(col);
        }
    }
}


const mainContainer = document.querySelector(".container");
mainContainer.addEventListener("mouseover", function () {
  event.target.style.background = "black";  
});

const button = document.querySelector(".reset");
button.addEventListener("click", () => resetBlue());

function resetBlue() {
    const allElements = document.querySelectorAll(".row, .column")
    for (let i = 0; i < allElements.length; i++) {
        allElements[i].style.backgroundColor = "lightblue";
    }
}

const newGridButton = document.querySelector(".newGrid");
newGridButton.addEventListener("click", () => newGrid());

function newGrid() {
    let numberOfSquares = 
    prompt("Please enter a number for the size of the grid: (Max: 100) ", "10");

    const allElements = document.querySelectorAll(".row, .column")
    for (let i = 0; i < allElements.length; i++) {
        allElements[i].remove();
    }

    if (Number(numberOfSquares) <= 100) {
        makeGrid(Number(numberOfSquares));
    }

    else {
        makeGrid(10);
    }
    return;
}