/*
    Validity Checker

    Handles page validation throughout the quiz setup process.
    Ensures the user selects all required options before
    moving to the next page or step.

    This also creates an obj containing all the parameters for api link generation
*/

import * as DOM from "./dom.js";
import * as fun from "./function.js";

// This variable saved the root user took to start the Quiz , Start Quiz Btn or Explore Categories Btn
var root = null; // ExploreCategoriesBtn or StartQuizBtn

// This Obj consist off all the parameters of api link generation
export let apiLinkParameters = {
    Category: null,
    Format : null,
    Difficulty: null,
    QuestionCount: null
}

// This Obj consist off all the parameters of api link generation but in a displayable way
// So can be directly displayed on the start Quiz Final Page
export let displayableApiParameters = {
    Category: null,
    Format : null,
    Difficulty: null,
    QuestionCount: null
}



// This event listener is for if root === ExploreCategoriesBtn



// This event Listener injects the categories selection page 
// if user clicks {Explore Categories} on home page
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "homepageExploreCategoriesBtn"){

        DOM.body.innerHTML = await fun.fetchCategoriesSectionPage();

        root = "ExploreCategoriesBtn";

    }

});

// This event Listener injects the Home page 
// if user clicks {Home Btn} on Explore Categories page
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "CategoriesSelectionPageHomeBtn") {

        DOM.body.innerHTML = await fun.fetchHomePage();

        root = null;

    }

});

// This event Listener injects the Format Selection Page
// if user clicks {Play Btn} on Explore Categories page
// & it also saves the category parameter for api link generation
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.classList.contains("CategoriesPageCardConatinerPlayBtn")) {

        // Saving the api link generation parameter
        apiLinkParameters.Category = e.target.closest(".CategoriesPageCardConatinerItems").dataset.categories;
        displayableApiParameters.Category = e.target.closest(".CategoriesPageCardConatinerItems").children[1].innerText;

        // injection Format Selection Page
        if(root === "ExploreCategoriesBtn") {

            DOM.body.innerHTML = await fun.fetchFormatSelectionPage();

            // Now the Home Btn is wrong here , so changing it to Catogeries Btn
            let homeBtn = DOM.body.querySelector("#CategoriesSelectionPageHomeBtn");
            let categoriesBtn = document.createElement("button");
            categoriesBtn.id = "CategoriesSelectionPageCategoriesBtn";
            categoriesBtn.innerText = "← Categories";

            homeBtn.replaceWith(categoriesBtn);

        }

    }

});

// This event Listener injects the Difficulty Selection Page
// if user clicks {Continue Btn} on Format Selection page
// But This will only inject it, if user have selected an option first
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "FormatSelectionPageContinueBtn") {

        // Injecting The Difficulty Selection Page
        DOM.body.innerHTML = await fun.fetchDifficultySelectionPage();

    }

});

// This event Listener injects the Category Selection Page
// if user clicks {Categories Btn} on Format Selection page
// This also resets the format user selected in the api link generation parameters obj
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "CategoriesSelectionPageCategoriesBtn") {
        
        // resetting the format parameter 
        apiLinkParameters.Format = null;
        displayableApiParameters.Format = null;

        // Injecting the Category selection page
        DOM.body.innerHTML = await fun.fetchCategoriesSectionPage();

    }

});

// This event Listener injects the Question Count Selection Page
// if user clicks {Continue Btn} on Difficulty Selection page
// only if user selects an valid option & also updates the api link generation parameters
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "DifficultySelectionPageContinueBtn") {

        // This Var stores the signal that user have selected an option or not
        let selected = false;

        let DifficultySelectionCards = window.document.body.querySelectorAll(".DifficultySelectionPageFormatOptionContainerItems");

        DifficultySelectionCards.forEach((val , idx , arr) => {

            if(val.classList.contains("selectItem")) {

                // Saving the parameter for generating api link
                apiLinkParameters.Difficulty = val.dataset.difficulty;
                displayableApiParameters.Difficulty = val.children[1].innerText;

                selected = true;

            }

        });

        if(selected) {

            // Injecting The Difficulty Selection Page
            DOM.body.innerHTML = await fun.fetchQuizQuestionCountSelectionPage();

        }

    }

});

// This event Listener injects the Format Selection Page
// if user clicks {Format Btn} on Difficulty Selection page
// This also resets the Difficulty user selected in the api link generation parameters obj
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "DifficultySelectionPageHomeBtn") {

        // resetting the Difficulty parameter 
        apiLinkParameters.Difficulty = null;
        displayableApiParameters.Difficulty = null;

        // Injecting the Format selection page
        if(root === "ExploreCategoriesBtn") {

            DOM.body.innerHTML = await fun.fetchFormatSelectionPage();

            // Now the Home Btn is wrong here , so changing it to Catogeries Btn
            let homeBtn = DOM.body.querySelector("#CategoriesSelectionPageHomeBtn");
            let categoriesBtn = document.createElement("button");
            categoriesBtn.id = "CategoriesSelectionPageCategoriesBtn";
            categoriesBtn.innerText = "← Categories";

            homeBtn.replaceWith(categoriesBtn);

        }

    }

});

// This event Listener injects the Difficulty Selection Page
// if user clicks {Difficulty Btn} on Quiz Count Selection page
// This also resets the Count user selected in the api link generation parameters obj
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "QuizCountSelectionPageDifficultyBtn") {

        // resetting the QuestionCount parameter 
        apiLinkParameters.QuestionCount = null;
        displayableApiParameters.QuestionCount = null;

        // Injecting the Difficulty selection page
        DOM.body.innerHTML = await fun.fetchDifficultySelectionPage();

    }

});

// This event Listener injects the Start Quiz Page
// if user clicks {Continue Btn} on Quiz Count Selection page
// only if user selects an valid option & also updates the api link generation parameters
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "QuizCountSelectionPageContinueBtn") {

        // This Var stores the signal that user have selected an option or not
        let selected = false;

        let QuestionCountSelectionCards = window.document.body.querySelectorAll(".QuizCountSelectionPageQuizCountContainerItems");

        QuestionCountSelectionCards.forEach((val , idx , arr) => {

            if(val.classList.contains("selectItem")) {

                // Saving the parameter for generating api link
                apiLinkParameters.QuestionCount = val.dataset.count;
                displayableApiParameters.QuestionCount = val.children[0].innerText;

                selected = true;

            }

        });

        if(selected) {

            // Injecting The Difficulty Selection Page
            DOM.body.innerHTML = await fun.fetchStartQuizPage();

            let quizConfigDisplayItems = window.document.body.querySelectorAll(".StartQuizPageCardConatinerItems");

            quizConfigDisplayItems.forEach((val , idx , arr) => {

                if(idx === 0) {
                    val.children[2].innerText = displayableApiParameters.Category;
                }
                if(idx === 1) {
                    val.children[2].innerText = displayableApiParameters.Format;
                }
                if(idx === 2) {
                    val.children[2].innerText = displayableApiParameters.Difficulty;
                }
                if(idx === 3) {
                    val.children[2].innerText = displayableApiParameters.QuestionCount;
                }

            });

        }

    }

});

// This event Listener injects the Quiz Count Page
// if user clicks {Quiz Count Btn} on End Quiz page
// This also resets the Count user selected in the api link generation parameters obj
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "StartQuizPageQuestionCountBtn") {

        // resetting the QuestionCount parameter 
        apiLinkParameters.QuestionCount = null;
        displayableApiParameters.QuestionCount = null;

        // Injecting the Difficulty selection page
        DOM.body.innerHTML = await fun.fetchQuizQuestionCountSelectionPage();

    }

});



// This event listener is for if root === StartQuizBtn
// It Injects Format selection page
// also saves the category too
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "homepageStartQuizeBtn") {

        root = "StartQuizBtn";

        if(root === "StartQuizBtn") {

            DOM.body.innerHTML = await fun.fetchFormatSelectionPage();

            // Saving api link generation parameter
            apiLinkParameters.Category = "any";
            displayableApiParameters.Category = "Any Category";

        }

    }

});

// This event listener injects format page if user click format btn on Difficulty Selection page
// & also resets the dificulty u selected
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "DifficultySelectionPageHomeBtn") {

        // Injecting The Format Page
        DOM.body.innerHTML = await fun.fetchFormatSelectionPage();

        // Resetting the api link generation parameters
        apiLinkParameters.Format = null;
        displayableApiParameters.Format = null;

    }

});