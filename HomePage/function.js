// Here all the functions used are defined

import * as DOM from "./dom.js";
import * as validityChecker from "./validityChecker.js";
import * as quizManager from "./quizManager.js";

// This function updates the scrollbar-gutter property , depending on the page dimensions
export function updateScrollBarGutter () {

    let hasVerticalScrollbar = document.documentElement.scrollHeight > document.documentElement.clientHeight;

    document.documentElement.style.scrollbarGutter = hasVerticalScrollbar ? "stable" : "auto";

}

// This Function fetches &  return the innerHtml of Home Page
export async function fetchHomePage () {

    let response = await fetch("index.html");
    
    let htmlText = await response.text();

    let parser = new DOMParser ();
    
    let dom = parser.parseFromString(htmlText , "text/html");

    let bodyInnerHtml = dom.body.innerHTML;

    return bodyInnerHtml;

}

// This Function fetches &  return the innerHtml of Categories Page
export async function fetchCategoriesPage () {

    let response = await fetch("../CategoriesPage/Categories.html");

    let htmlText = await response.text();

    let parser = new DOMParser ();

    let doc = parser.parseFromString(htmlText , "text/html");

    let bodyInnerHtml = doc.body.innerHTML;

    return bodyInnerHtml;
}

// This Function fetches &  return the innerHtml of About Page
export async function fetchAboutPage () {

    let response = await fetch("../AboutPage/about.html");

    let htmlText = await response.text();

    let parser = new DOMParser ();

    let doc = parser.parseFromString(htmlText , "text/html");

    let bodyInnerHtml = doc.body.innerHTML;

    return bodyInnerHtml;

}

// This Function fetches &  return the innerHtml of Categories Selection Page
export async function fetchCategoriesSectionPage () {

    let response = await fetch("../CategoriesSelectionPage/CategoriesSelectionPage.html");

    let htmlText = await response.text();

    let parser = new DOMParser ();

    let doc = parser.parseFromString(htmlText , "text/html");

    let bodyInnerHtml = doc.body.innerHTML;

    return bodyInnerHtml;

}

// This Function fetches &  return the innerHtml of Format Selection Page
export async function fetchFormatSelectionPage () {

    let response = await fetch("../FormatSelectionPage/FormatSelectionPage.html");

    let htmlText = await response.text();

    let parser = new DOMParser ();

    let doc = parser.parseFromString(htmlText , "text/html");

    let bodyInnerHtml = doc.body.innerHTML;

    return bodyInnerHtml;

}

// This Function fetches &  return the innerHtml of Difficulty Selection Page
export async function fetchDifficultySelectionPage () {

    let response = await fetch("../DifficultySelectionPage/DifficultySelectionPage.html");

    let htmlText = await response.text();

    let parser = new DOMParser ();

    let doc = parser.parseFromString(htmlText , "text/html");

    let bodyInnerHtml = doc.body.innerHTML;

    return bodyInnerHtml;

}

// This Function fetches &  return the innerHtml of Quiz Question Count Selection Page
export async function fetchQuizQuestionCountSelectionPage () {

    let response = await fetch("../QuizCountSelectionPage/QuizCountSelectionPage.html");

    let htmltext = await response.text();

    let parser = new DOMParser ();

    let doc = parser.parseFromString(htmltext , "text/html");

    let bodyInnerHtml = doc.body.innerHTML;

    return bodyInnerHtml;

}

// This Function fetches &  return the innerHtml of Start Quiz Page
export async function fetchStartQuizPage () {

    let response = await fetch("../StartQuizPage/StartQuizPage.html");

    let htmlText = await response.text();

    let parser = new DOMParser ();

    let doc = parser.parseFromString(htmlText , "text/html");

    let bodyInnerHtml = doc.body.innerHTML;

    return bodyInnerHtml;

}

// This Function fetches &  return the innerHtml of MCQ Quiz Page
export async function fetchMCQQizPage () {

    let response = await fetch("../MCQ/MCQ.html");

    let htmlText = await response.text();

    let parser = new DOMParser ();

    let doc = parser.parseFromString(htmlText , "text/html");

    let bodyInnerHtml = doc.body.innerHTML;

    return bodyInnerHtml;

}

// This Function fetches &  return the innerHtml of Boolean Quiz Page
export async function fetchBooleanQizPage () {

    let response = await fetch("../Boolean/Boolean.html");

    let htmlText = await response.text();

    let parser = new DOMParser ();

    let doc = parser.parseFromString(htmlText , "text/html");

    let bodyInnerHtml = doc.body.innerHTML;

    return bodyInnerHtml;

}

// This Function fetches &  return the innerHtml of end Page
export async function fetchEndPage () {

    let response = await fetch("../endPage/endPage.html");

    let htmlText = await response.text();

    let parser = new DOMParser ();

    let doc = parser.parseFromString(htmlText , "text/html");

    let bodyInnerHtml = doc.body.innerHTML;

    return bodyInnerHtml;

}

// This function fetches loading screen
export async function fetchLoadingScreen () {

    let response = await fetch("../loadingScreen/loadingScreen.html");

    let htmlText = await response.text();

    let parser = new DOMParser ();

    let doc = parser.parseFromString(htmlText , "text/html");

    let bodyInnerHtml = doc.body.innerHTML;

    return bodyInnerHtml;

}

// This function fetches & returns the quiz data
export async function fetchQuizData () {

    let baseUrl = "https://opentdb.com/api.php?";

    // fullUrl Eg :- https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple
    let fullUrl = null;

    if(validityChecker.apiLinkParameters.QuestionCount !== null) {

        fullUrl = baseUrl + `amount=${validityChecker.apiLinkParameters.QuestionCount}`;

    }

    if(validityChecker.apiLinkParameters.Category !== null && validityChecker.apiLinkParameters.Category !== "any") {

        fullUrl = fullUrl + `&category=${Number(validityChecker.apiLinkParameters.Category)}`;

    }

    if(validityChecker.apiLinkParameters.Difficulty !== null && validityChecker.apiLinkParameters.Difficulty !== "any") {

        fullUrl = fullUrl + `&difficulty=${validityChecker.apiLinkParameters.Difficulty}`;

    }

    console.log(fullUrl); // Why null ??

    let response = await fetch(fullUrl);
    let data = await response.json();
    console.log(data);
    data = data.results;

    console.log(data);
    return data;

}

// This function shuffels an array & return the new array
// This uses fissher yeast method
export function shuffelArray (unShuffeledArray) {

    let length = unShuffeledArray.length;

    let finalIdx = length - 1;

    for(let i = finalIdx; i >= 0; i--) {

        let randomIdx = Math.floor(Math.random() * (i + 1));

        let temp = unShuffeledArray[i];
        unShuffeledArray[i] = unShuffeledArray[randomIdx];
        unShuffeledArray[randomIdx] = temp;

    }

    return unShuffeledArray;

}

// Many times api return text in html coded form 
// eg :- API return => Who wrote the novel &quot;Moby-Dick&quot ;?
// But it just means => Who wrote the novel "Moby-Dick" ?
// This function takes html coded text & returns normal text version
export function htmlCodeToText (htmlCodedStr) {

    let text = window.document.createElement("textarea");
    text.innerHTML = htmlCodedStr;

    return text.value;

}

// This function renders the quiz question page based on the current state
export async function render (CurrentStateObj , dataArray) {

    // Checking the type of quiz

    // Multiple
    if(dataArray[CurrentStateObj.currentQuestion - 1].type === "multiple") {

        DOM.body.innerHTML = await fetchMCQQizPage();

        // Displaying the format user selected
        DOM.body.querySelector("#MCQCategory").innerText = validityChecker.displayableApiParameters.Format;

        // Displaying the Category user selected
        DOM.body.querySelector("#MCQCategoriesDisplay").innerText = validityChecker.displayableApiParameters.Category;

        // Displaying the current score
        DOM.body.querySelector("#score").innerText = CurrentStateObj.currentScore;

        // Updating the progress bar section

        // Question Representation Number
        DOM.body.querySelector("#questionRepresentationNumber").innerText = `Question ${CurrentStateObj.currentQuestion} of ${CurrentStateObj.totalQuestion}`;

        // Question Representation Percentage
        DOM.body.querySelector("#questionRepresentationPercentage").innerText = `${((CurrentStateObj.currentQuestion / CurrentStateObj.totalQuestion)*100).toFixed(2)}% Completed`;

        // Progress bar
        DOM.body.querySelector("#pregressBarContent").style.width = `${(CurrentStateObj.currentQuestion / CurrentStateObj.totalQuestion)*100}%`;

        // Updating the question
        DOM.body.querySelector("#question").innerText = htmlCodeToText(dataArray[CurrentStateObj.currentQuestion - 1].question);

        // Updating the options
        let allOptions = [];
        allOptions.push(htmlCodeToText(dataArray[CurrentStateObj.currentQuestion - 1].correct_answer));
        allOptions.push(htmlCodeToText(dataArray[CurrentStateObj.currentQuestion - 1].incorrect_answers[0]));
        allOptions.push(htmlCodeToText(dataArray[CurrentStateObj.currentQuestion - 1].incorrect_answers[1]));
        allOptions.push(htmlCodeToText(dataArray[CurrentStateObj.currentQuestion - 1].incorrect_answers[2]));

        allOptions = shuffelArray(allOptions);

        let optionsElements = DOM.body.querySelectorAll(".options");

        optionsElements.forEach((val , idx , arr) => {

            val.children[1].innerText = allOptions[idx];

        });

    }else {

        // Boolean
        DOM.body.innerHTML = await fetchBooleanQizPage();

        // Displaying the format user selected
        DOM.body.querySelector("#MCQCategory").innerText = validityChecker.displayableApiParameters.Format;

        // Displaying the Category user selected
        DOM.body.querySelector("#MCQCategoriesDisplay").innerText = validityChecker.displayableApiParameters.Category;

        // Displaying the current score
        DOM.body.querySelector("#score").innerText = CurrentStateObj.currentScore;

        // Updating the progress bar section

        // Question Representation Number
        DOM.body.querySelector("#questionRepresentationNumber").innerText = `Question ${CurrentStateObj.currentQuestion} of ${CurrentStateObj.totalQuestion}`;

        // Question Representation Percentage
        DOM.body.querySelector("#questionRepresentationPercentage").innerText = `${((CurrentStateObj.currentQuestion / CurrentStateObj.totalQuestion)*100).toFixed(2)}% Completed`;

        // Progress bar
        DOM.body.querySelector("#pregressBarContent").style.width = `${(CurrentStateObj.currentQuestion / CurrentStateObj.totalQuestion)*100}%`;

        // Updating the question
        DOM.body.querySelector("#question").innerText = htmlCodeToText(dataArray[CurrentStateObj.currentQuestion - 1].question);

        // Updating the options
        let optionsElements = DOM.body.querySelectorAll(".options");

        optionsElements[0].children[1].innerText = "True";
        optionsElements[1].children[1].innerText = "False";

    }

}

// This function Checks answer & updates CSS & state obj
export async function checkAnswer (CurrentStateObj , dataArray) {

    let option = window.document.querySelector(".selectItem");

    if(option.children[1].innerText === htmlCodeToText(dataArray[CurrentStateObj.currentQuestion - 1].correct_answer)) {

        option.classList.add("correctItem");
        option.children[0].classList.add("correctTag");

        return true;

    }else {

        option.classList.add("wrongItem");
        option.children[0].classList.add("wrongTag");

        return false;

    }

}