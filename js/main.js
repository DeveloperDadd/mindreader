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

let currentPage = 0;
let pageOne = {
    'headingText' : "I can read your mind", 
    'nextButtonVisibility' : nextButton.style.visibility = 'hidden',
    'exampleTextVisibility' : document.style.visibility = 'hidden',
    'goButtonVisibility' : goButton.style.visibility = 'inital',
    'backButtonVisibility' : backButton.style.visibility = ''
};
let pageTwo = {
    'heading' : heading.innerHTML = 'Pick a number from 01 - 99',
    'nextButton' : nextButton.style.display = 'initial',
    'exampleText' : exampleText.innerHTML = 'when you have your number click next',
    'goButton' : goButton.style.visibility = 'hidden',
    'backButton' : backButton.style.visibility = 'initial'
};
let pageThree = {
    'heading' : heading.innerHTML = 'Pick a number from 01 - 99',
    'nextButton' : nextButton.style.display = 'initial',
    'exampleText' : exampleText.innerHTML = 'when you have your number click next',
    'goButton' : goButton.style.visibility = 'hidden',
    'backButton' : backButton.style.visibility = 'initial'
}


// look at using switch case
function checkPage() {
    if (currentPage === 1) {
        console.log('You are on page ' + currentPage);
        return pageOne;
    } else if (currentPage === 2) {
        console.log('You are on page ' + currentPage);
        return pageTwo;
    } else if (currentPage === 3) {
        console.log('You are on page ' + currentPage);
        return pageThree;
    } else if (currentPage === 4) {
        console.log('You are on page ' + currentPage);
        return pageFour;
    } else if (currentPage === 5) {
        console.log('You are on page ' + currentPage);
        return pageFive;
    } else if (currentPage === 6) {
        console.log('You are on page ' + currentPage);
        return pageSix;
    }
}






