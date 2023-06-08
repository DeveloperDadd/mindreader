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
    const roundButton = document.createElement("button");
        roundButton.setAttribute("id", "roundButton");
        col.appendChild(roundButton);
}

render ();

const heading = document.getElementById("heading");
const nextButton = document.getElementById("next");
const exampleText = document.getElementById("exampleText");
const roundButton = document.getElementById("roundButton");


let pageOne = {
    'headingText' : "I can read your mind", 
    'nextButtonVisibility' : false,
    'exampleText' : '',
    'roundButtonVisibility' : true
};
let pageTwo = {
    'headingText' : 'Pick a number from 01 - 99',
    'nextButtonVisibility' : true,
    'exampleText' : 'when you have your number click next',
    'roundButtonVisibility' : true
};
let pageThree = {
    'headingText' : 'Add both digits together to get a new number',
    'nextButtonVisibility' : true,
    'exampleText' : 'Ex: 14 is 1 + 4 = 5 click next to proceed',
    'roundButtonVisibility' : true
};
let pageFour = {
    'headingText' : 'Subtract your new number from the original number',
    'nextButtonVisiblity' : true,
    'exampleText' : 'Ex: 14 - 5 = 9 click next to proceed',
    'roundButtonVisibility' : true
};
let pageFive = {
    'headingText' : '0 - & 1 - @ 2 - $ 3 - B ...',
    'nextButtonVisibility' : true,
    'exampleText' : 'Find your new number. Note the symbol beside the number',
    'roundButtonVisibility' : true
};
let pageSix = {
    'headingText' : '&',
    'nextButtonVisibility' : false,
    'exampleText' : 'Your symbol is: &',
    'roundButtonVisibility' : false
};

let pages = [pageOne, pageTwo, pageThree, pageFour, pageFive, pageSix];
let currentPage = 0;

function updatePage() {
    heading.textContent = pages[currentPage].headingText; 
    exampleText.textContent = pages[currentPage].exampleText;
    if (pages[currentPage].roundButtonVisibility) {
        roundButton.textContent = "GO";
    } else {
        roundButton.innerHTML = "<i></i>";
        let icon = document.querySelector("i");
        icon.classList.add("bi");
        icon.classList.add("bi-arrow-90deg-left");
    }
    if (pages[currentPage].nextButtonVisibility) {
        nextButton.textContent = NEXT;
    } else {
        nextButton.style.visibility = "hidden";
    }

};

nextButton.addEventListener('click', currentPage+=, updatePage);

roundButton.addEventListener('click', roundButton() {
    if (currentPage === 0) {
        let currentPage = currentPage + 1;
        console.log(currentPage);
        updatePage();
    } else {
        let currentPage = currentPage - 1;
        updatePage();
    };


