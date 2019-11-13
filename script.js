// jshint esversion: 6

let gridSize;

gridSize = 50;

const reset = document.querySelector("#reset");
const white = document.querySelector("#white");
const black = document.querySelector("#black");
const random = document.querySelector("#random");
const container = document.querySelector("#container");

//create grid
function createGrid(gridSize) {
    for (let i = 1; i <= gridSize * gridSize; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("grid");
        container.style.cssText = `grid-template-rows: repeat(${gridSize}, auto); 
                                grid-template-columns: repeat(${gridSize}, auto);`;
        container.appendChild(newDiv);
    }
}

//adds event listener to grid and turns on whiteout mode
function whiteOut() {
    let grid = document.querySelectorAll(".grid");
        grid.forEach((div) => {
        div.addEventListener("mouseover", (e) => {
            e.target.style.background = "white";
        });
    });
}

//adds event listener to grid and turns on blackout mode
function blackOut() {
    let grid = document.querySelectorAll(".grid");
        grid.forEach((div) => {
        div.addEventListener("mouseover", (e) => {
            e.target.style.background = "black";
            e.target.style.borderColor = "black";
        });
    });
}

//adds event listener to grid and turns on random color mode
function colorOut() {
    let grid = document.querySelectorAll(".grid");
    grid.forEach((div) => {
        div.addEventListener("mouseover", (e) => {
            e.target.style.cssText = `background-color: rgb(${getRGB()},${getRGB()},${getRGB()});`;
        });
    });
}

function resetBtn() {
    container.innerHTML = "";
}

function init() {
    createGrid(gridSize);
    whiteOut();
}

function getRGB() {
    return Math.floor(Math.random() * 256);
}

function promptForSize() {
    gridSize = prompt("Enter the number of boxes desired per side, between 16 & 100");
    parseInt(gridSize);
    if (gridSize > 100 || gridSize < 16) {
        promptForSize();
    } else {
        return gridSize;
    }
}

reset.addEventListener("click", function(){
    resetBtn();
    promptForSize();
    init();
});

init();
white.addEventListener("click", whiteOut);
black.addEventListener("click", blackOut);
random.addEventListener("click", colorOut);
