/* Homepage Main JS File, here all the final execution , function calling etc happens */

import * as DOM from "./dom.js";
import * as fun from "./function.js";

// Executing updateScrollBarGutter() once before any thing to set the scrollbar-gutter property of the home page since different divices have different dimensions , making scrollbar-gutter property different for different divices
fun.updateScrollBarGutter();

// This executes updateScrollBarGutter() function , every time any slight diminsion occurs in body & changes the scrollbar-gutter property , for more stable layout
const observer = new ResizeObserver (() => {
    fun.updateScrollBarGutter();
});

// Setting observer for <html> element
observer.observe(document.documentElement);

// This event listener injects the Home Page On Clicking the home section in the navbar
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "homepageNavbarOption1"){

        DOM.body.innerHTML = await fun.fetchHomePage();

    }

});

// This event listener injects the Categories Page On Clicking the home section in the navbar
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "homepageNavbarOption2"){

        DOM.body.innerHTML = await fun.fetchCategoriesPage();

    }

});

// This event listener injects the About Page On Clicking the about section in the navbar
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "homepageNavbarOption3"){

        DOM.body.innerHTML = await fun.fetchAboutPage();

    }

});

// This variable saved the root user took to start the Quiz , Start Quiz Btn or Explore Categories Btn
var root = null; // ExploreCategoriesBtn or StartQuizBtn

// This event listener injects the Categories Selection Page On Clicking the Explore Categories Btn in Home Page
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "homepageExploreCategoriesBtn"){

        DOM.body.innerHTML = await fun.fetchCategoriesSectionPage();

        root = "ExploreCategoriesBtn";

    }

});

// This event listener injects the Home Page On Clicking the Home Btn in Categories Selection Page & Format Selection Page
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "CategoriesSelectionPageHomeBtn"){

        DOM.body.innerHTML = await fun.fetchHomePage();

        root = null;

    }

});

// This event listener injects the Format Selection Page On Clicking the Start Quiz Btn on Home Page
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "homepageStartQuizeBtn"){

        DOM.body.innerHTML = await fun.fetchFormatSelectionPage();

        root = "StartQuizBtn";

    }

});

// This event listener injects the Format Selection Page On Clicking the Play Btn on Categories Selection Page
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.classList.contains("CategoriesPageCardConatinerPlayBtn")){

        DOM.body.innerHTML = await fun.fetchFormatSelectionPage();

        // Now the Home Btn is wrong here , so changing it to Catogeries Btn
        let homeBtn = DOM.body.querySelector("#CategoriesSelectionPageHomeBtn");
        let categoriesBtn = document.createElement("button");
        categoriesBtn.id = "CategoriesSelectionPageCategoriesBtn";
        categoriesBtn.innerText = "← Categories";

        homeBtn.replaceWith(categoriesBtn);

    }

});

// This event listener injects the Categories Selection Page On Clicking the Categories Btn on Format Selection Page
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "CategoriesSelectionPageCategoriesBtn"){

        DOM.body.innerHTML = await fun.fetchCategoriesSectionPage();

    }

});

// This event listener injects the Difficulty Selection Page On Clicking the Continue Btn on Format Selection Page
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "FormatSelectionPageContinueBtn"){

        DOM.body.innerHTML = await fun.fetchDifficultySelectionPage();

    }

});

// This event listener injects the Format Selection Page On Clicking the Format Btn on Difficulty Selection Page 
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "DifficultySelectionPageHomeBtn"){

        // root === ExploreCategoriesBtn or StartQuizBtn
        if(root === "ExploreCategoriesBtn") {

            DOM.body.innerHTML = await fun.fetchFormatSelectionPage();

            // Now the Home Btn is wrong here , so changing it to Catogeries Btn
            let homeBtn = DOM.body.querySelector("#CategoriesSelectionPageHomeBtn");
            let categoriesBtn = document.createElement("button");
            categoriesBtn.id = "CategoriesSelectionPageCategoriesBtn";
            categoriesBtn.innerText = "← Categories";

            homeBtn.replaceWith(categoriesBtn);

        }else if(root === "StartQuizBtn") {

            DOM.body.innerHTML = await fun.fetchFormatSelectionPage();

        }

    }

});

// This event listener injects the Quiz Question Count Selection Page On Clicking the Continue Btn on Difficulty Selection Page 
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "DifficultySelectionPageContinueBtn") {

        DOM.body.innerHTML = await fun.fetchQuizQuestionCountSelectionPage();

    }

});

// This event listener injects the Difficulty Selection Page  On Clicking the Difficulty Btn on Quiz Question Count Selection Page
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "QuizCountSelectionPageDifficultyBtn") {

        DOM.body.innerHTML = await fun.fetchDifficultySelectionPage();

    }

});

// This event listener injects the Start Quiz Page On Clicking the Continue Btn on Quiz Question Count Selection Page
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "QuizCountSelectionPageContinueBtn") {

        DOM.body.innerHTML = await fun.fetchStartQuizPage();

    }

});

// This event listener injects the Quiz Question Count Selection Page On Clicking the Question Count Btn on Start Quiz Page
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "StartQuizPageQuestionCountBtn") {

        DOM.body.innerHTML = await fun.fetchQuizQuestionCountSelectionPage();

    }

});