/*
    Note:
    The loading screen was AI-generated and not originally designed by me.

    However, the complete project implementation —
    including the quiz logic, API integration,
    state management, UI flow, and overall development —
    was fully built by me.
*/

const loadingMessages = [

    "Fetching Questions",
    "Balancing Difficulty",
    "Generating Challenge",
    "Preparing Experience",
    "Almost Ready"

];

const loadingText = document.getElementById("loadingText");

let currentIndex = 0;

setInterval(() => {

    currentIndex++;

    if(currentIndex >= loadingMessages.length){

        currentIndex = 0;
    }

    loadingText.textContent = loadingMessages[currentIndex];

}, 1700);