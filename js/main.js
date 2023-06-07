//The below function when invoked should create a div with class container, another one with class row, and finally one with two classes: col-sm and col-12.
/*function render() {
    return{
        const contain = document.createElement("div");
        contain.addClassList("container");
        const row = document.createElement("div");
        row.addClassList("row");
        document.getElementsByClassName("container").appendChild(row);
        const col = document.createElement("div");
        col.addClistList("col-sm col-12");
        document.getElementsByClassName("row").appendChild(col);}
}

render ();*/

const heading = document.getElementById("heading");
const nextButton = document.getElementById("next");
const exampleText = document.getElementById("exampleText");
const goButton = document.getElementById("go");
const backButton = document.getElementById("back");

let currentPage = 1;
let pageOne = {
    'heading' : heading.innerHTML ="I can read your mind", 
    'nextButton' : nextButton.style.visibility = 'hidden',
    'exampleText' : document.style.visibility = 'hidden',
    'goButton' : goButton.style.visibility = 'inital',
    'backButton' : backButton.style.visibility = ''
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

checkPage();




