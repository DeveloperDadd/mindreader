//The below function when invoked should create a div with class container, another one with class row, and finally one with two classes: col-sm and col-12.
//Event listener on page load, run the render function

function render() {
    const app = document.getElementById("app");    
    const contain = document.createElement("div");
        contain.classList.add("container");
        app.appendChild(contain);
    const row = document.createElement("div");
        row.classList.add("row");
        contain.appendChild(row);
    const col = document.createElement("div");
        col.classList.add("col-sm");
        col.classList.add("col-12");
        row.appendChild(col);    
    const heading = document.createElement("h1");
        heading.setAttribute("id", "heading");
        col.appendChild(heading);
    const nextButton = document.createElement("button");
        nextButton.setAttribute("id", "nextButton");
        col.appendChild(nextButton);
    const exampleText = document.createElement("p")
        exampleText.setAttribute("id", "exampleText");
        col.appendChild(exampleText);
    const goButton = document.createElement("button");
        goButton.setAttribute("id", "goButton");
        col.appendChild(goButton);
    const backButton = document.createElement("button");
        backButton.setAttribute("id", "backButton");
        col.appendChild(backButton);
}

render ();

const heading = document.getElementById("heading");
const nextButton = document.getElementById("next");
const exampleText = document.getElementById("exampleText");
const goButton = document.getElementById("go");
const backButton = document.getElementById("back");


let pageOne = {
    'headingText' : "I can read your mind", 
    'nextButtonVisibility' : false,
    'exampleTextVisibility' : false,
    'goButtonVisibility' : true,
    'roundButtonVisibility' : false
};
let pageTwo = {
    'heading' : 'Pick a number from 01 - 99',
    'nextButton' : true,
    'exampleText' : 'when you have your number click next',
    'goButton' : false,
    'backButton' : true,
};
let pageThree = {
    'heading' : 'Add both digits together to get a new number',
    'nextButton' : true,
    'exampleText' : 'Ex: 14 is 1 + 4 = 5 click next to proceed',
    'goButton' : false,
    'backButton' : true
};
let pageFour = {
    'heading' : 'Subtract your new number from the original number',
    'nextButton' : true,
    'exampleText' : 'Ex: 14 - 5 = 9 click next to proceed',
    'goButton' : false,
    'backButton' : true
};
let pageFive = {
    'heading' : '0 - & 1 - @ 2 - $ 3 - B ...',
    'nextButton' : true,
    'exampleText' : 'Find your new number. Note the symbol beside the number',
    'goButton' : false,
    'backButton' : true
};
let pageSix = {
    'heading' : '&',
    'nextButton' : false,
    'exampleText' : 'Your symbol is:<br> &',
    'goButton' : false,
    'backButton' : true
};

let pages = [pageOne, pageTwo, pageThree, pageFour, pageFive, pageSix];
let currentPage = 0;

function updatePage() {
    heading.textContent = pages[currentPage].heading; 
    exampleText.textContent = pages[currentPage].exampleText;
    if (pages[currentPage].goButton) {
        goButton.textContent = GO;
    } else {
        goButton.innerHTML = ""
    }
};

