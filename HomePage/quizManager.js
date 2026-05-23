/*
Manages the complete quiz system including quiz setup,
selected options, API requests, quiz data, score updates,
results, and overall quiz flow.
*/

import * as DOM from "./dom.js";
import * as fun from "./function.js";
import * as apiParameters from "./validityChecker.js";

// This var always stores the current state 
export let currentState = {
    currentQuestion: 1,
    totalQuestion: null, // because at the time module rund it may not be valid to fetch this data
    currentScore: 0,
    correctAnswers: 0,
    inCorrectAnswers: 0
}

// This event listener fetches the Quiz data when user clicks the start quiz btn
let data = null;
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "StartQuizPageStartQuizBtn") {

        // Disabling the start quiz btn
        DOM.body.querySelector("#StartQuizPageStartQuizBtn").disabled = true;
        // Disabling the return to QuestionCount page Btn
        DOM.body.querySelector("#StartQuizPageQuestionCountBtn").disabled = true;

        // Adding Loading Screen
        DOM.body.innerHTML = await fun.fetchLoadingScreen();

        // Here the real process starts , since the wait is over
        currentState.totalQuestion = Number(apiParameters.apiLinkParameters.QuestionCount);

        data = await fun.fetchQuizData();

        await fun.render(currentState , data);

    }

});

// Once the user selects the option & clicks Next Quiz Btn 
// then the following event listener fires
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "MCQNextQuizBtn") {

        // The Question cant be the last question
        if(currentState.currentQuestion !== currentState.totalQuestion) {

            // Disabling the next quiz btn
            if(window.document.querySelector(".selectItem")) {

                DOM.body.querySelector("#MCQNextQuizBtn").disabled = true;

            }

            let result = await fun.checkAnswer(currentState , data);

            // if correct
            if(result) {

                currentState.currentQuestion += 1;
                currentState.currentScore += 4;
                currentState.correctAnswers += 1;

            }else {

                currentState.currentQuestion += 1;
                currentState.currentScore -= 2;
                currentState.inCorrectAnswers += 1;

            }

            setTimeout(async () => {

                await fun.render(currentState , data);

            } , 1000);

        }else {
            // If the question is the last question

            // Disabling the next quiz btn
            if(window.document.querySelector(".selectItem")) {

                DOM.body.querySelector("#MCQNextQuizBtn").disabled = true;

            }

            let result = await fun.checkAnswer(currentState , data);

            // if correct
            if(result) {

                currentState.currentScore += 4;
                currentState.correctAnswers += 1;

            }else {

                currentState.currentScore -= 2;
                currentState.inCorrectAnswers += 1;

            }

            setTimeout(async () => {

                // Here showing the final end page of the quiz
                DOM.body.innerHTML = await fun.fetchEndPage();

                // Now updating the end page

                // Upating the category display
                DOM.body.querySelector("#endPageFormatDisplay").innerText = apiParameters.displayableApiParameters.Category;

                // Updaing the final score
                DOM.body.querySelector("#endPageFinalScore").innerText = currentState.currentScore;

                // Updaing the Correct Attempts
                DOM.body.querySelector("#endPageCorrectAnswers").innerText = currentState.correctAnswers;

                // Updaing the InCorrect Answers
                DOM.body.querySelector("#endPageWrongAnswers").innerText = currentState.inCorrectAnswers;

                // Updaing the Accuracy
                DOM.body.querySelector("#endPageAccuracy").innerText = `${((currentState.correctAnswers / currentState.totalQuestion) * 100).toFixed(2)}%`;

                // Updating the quiz summary
                DOM.body.querySelector("#endPageSummary").innerText = `You answered ${currentState.correctAnswers} questions correctly and earned a final score of ${currentState.currentScore} points. Keep practicing different categories and challenge yourself with harder quizzes to improve even further.`;

            } , 1000);

        }

    }

});

