const body = window.document.body;

// This EventListener Manages the active state (UI/UX) of the Format Options
body.addEventListener("click" , (e) => {

    if(e.target.closest(".QuizCountSelectionPageQuizCountContainerItems")) {

        const allCards = window.document.body.querySelectorAll(".QuizCountSelectionPageQuizCountContainerItems");

        allCards.forEach((val , idx , arr) => {

            val.classList.remove("selectItem");
            val.children[0].classList.remove("selectIcon");

        });

        e.target.closest(".QuizCountSelectionPageQuizCountContainerItems").classList.add("selectItem");
        e.target.closest(".QuizCountSelectionPageQuizCountContainerItems").children[0].classList.add("selectIcon");

    }

});