//The below function when invoked should create a div with class container, another one with class row, and finally one with two classes: col-sm and col-12.
//Event listener on page load, run the render function

//INITIALIZE VARIABLES
let heading; 
let nextButton;  
let exampleText; 
let roundButton; 
let app;

function render() {
    app = document.getElementById("app");    
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
    heading = document.createElement("h1");
        heading.setAttribute("id", "heading");
        col.appendChild(heading);
    nextButton = document.createElement("button");
        nextButton.setAttribute("id", "nextButton");
        col.appendChild(nextButton);
    exampleText = document.createElement("p");
        exampleText.setAttribute("id", "exampleText");
        col.appendChild(exampleText);
    roundButton = document.createElement("button");
        roundButton.setAttribute("id", "roundButton");
        col.appendChild(roundButton);
    nextButton.addEventListener('click', nextPage); //when next button is clicked, it will increment to the next page and run the updatePage function
    roundButton.addEventListener('click', togglePage); //when next button is clicked, it will run through the togglePage function
};

window.addEventListener("load", (event) => { //event listener for when the page loads it will render the initial page, and update it accordingly using the updatePage function
    render();
    heading = document.getElementById("heading");
    nextButton = document.getElementById("nextButton");
    exampleText = document.getElementById("exampleText");
    roundButton = document.getElementById("roundButton");
    updatePage();
  });

let pageOne = {
    'headingText' : 'I can read your mind', 
    'nextButtonVisibility' : false,
    'exampleText' : '',
    'roundButtonVisibility' : true,
    'symbolsTableVisibility': false
};
let pageTwo = {
    'headingText' : 'Pick a number from 1 - 99',
    'nextButtonVisibility' : true,
    'exampleText' : 'when you have your number click next',
    'roundButtonVisibility' : false,
    'symbolsTableVisibility': false
};
let pageThree = {
    'headingText' : 'Add both digits together to get a new number',
    'nextButtonVisibility' : true,
    'exampleText' : 'Ex: 14 is 1 + 4 = 5 click next to proceed',
    'roundButtonVisibility' : false,
    'symbolsTableVisibility': false
};
let pageFour = {
    'headingText' : 'Subtract your new number from the original number',
    'nextButtonVisibility' : true,
    'exampleText' : 'Ex: 14 - 5 = 9 click next to proceed',
    'roundButtonVisibility' : false,
    'symbolsTableVisibility': false
};
let pageFive = {
    'headingText' : '0 - & 1 - @ 2 - $ 3 - B ...',
    'nextButtonVisibility' : true,
    'exampleText' : 'Find your new number. Note the symbol beside the number',
    'roundButtonVisibility' : false,
    'symbolsTableVisibility': true
};
let pageSix = {
    'headingText' : '&',
    'nextButtonVisibility' : false,
    'exampleText' : 'Your symbol is: &',
    'roundButtonVisibility' : false,
    'symbolsTableVisibility': false
};

let pages = [pageOne, pageTwo, pageThree, pageFour, pageFive, pageSix]; //array of all the page objects
let currentPage = 0; //so pages[currentPage] is the same as pages[0] which would display pageOne

function updatePage() {
    heading.textContent = pages[currentPage].headingText; //take the index currentPage of array 'pages' and returns the headingText as the textContent
    exampleText.textContent = pages[currentPage].exampleText; //take the index currentPage of array pages and returns the exampleText as the textContent
    if (pages[currentPage].roundButtonVisibility) { //if roundButtonVisibility = true; textcontent of button = 0
        roundButton.textContent = "GO";
    } else {
        roundButton.innerHTML = "<i></i>"; //or else the innerHTML will be an icon of a reverse arrow
        let icon = document.querySelector("i");
        icon.classList.add("bi");
        icon.classList.add("bi-arrow-90deg-left");
    }
    if (pages[currentPage].nextButtonVisibility) { //if nextButtonVisibility is true, display button with text NEXT or else hide the button
        nextButton.textContent = "NEXT";
        document.getElementById("nextButton").style.visibility = "visible";
    } else {
        document.getElementById("nextButton").style.visibility = "hidden";
    };
  if (pages[currentPage].symbolsTableVisibility) {
        getNumber();
        let finalSymbols = showSymbols();
        heading.classList.add("scrollspy-example");
        heading.setAttribute("data-spy", "scroll");
        heading.setAttribute("data-target", "#list-example");
        heading.setAttribute("data-offset", "0");
    } else {
        document.getElementById("scrollspy").style.visibility = "hidden";
    } 
};

function nextPage() { //function to increment the currentPage by one and then update the page
    currentPage += 1;
    console.log(currentPage);
    updatePage();
};

function togglePage() { //this function will go the next page if currentPage === 0, if it is greater than 0 it will decrement. 
    if (currentPage === 0) {
        nextPage();
    } else if (currentPage >= 1) {
        currentPage -= 1;
        updatePage();
    }
}


//THE BELOW PORTION IS THE FUNCTIONALITY TO GENERATE RANDOM SYMBOLS AND ATTACH THEM TO NUMBERS 00 - 99;

let lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let alphabet = lower.concat(upper);
let symbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '-', '+'];
let symbolsArr = symbols.concat(alphabet);

function getNumber() {
  return Math.floor(Math.random() * symbolsArr.length);
}

function showSymbols() {
  let output = '';
  for (let i = 0; i < 100; i++) {
    let randomNumber = getNumber();
    let symbol = symbolsArr[randomNumber];
    if (i === 0 || i % 9 === 0) {
      symbol = '&'; //random symbol displayed on page 6 = chosen symbol
    };
    output += `${i} - ${symbol}<br>`;
  };
  document.getElementById("heading").innerHTML = output;
};