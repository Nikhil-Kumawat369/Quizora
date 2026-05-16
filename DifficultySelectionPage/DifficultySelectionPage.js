const body = window.document.body;

// This EventListener Manages the active state (UI/UX) of the Format Options
body.addEventListener("click" , (e) => {

    if(e.target.closest(".DifficultySelectionPageFormatOptionContainerItems")) {

        const allCards = window.document.body.querySelectorAll(".DifficultySelectionPageFormatOptionContainerItems");

        allCards.forEach((val , idx , arr) => {

            val.classList.remove("selectItem");
            val.children[0].classList.remove("selectIcon");
            val.children[3].classList.remove("selectTag");

        });

        e.target.closest(".DifficultySelectionPageFormatOptionContainerItems").classList.add("selectItem");
        e.target.closest(".DifficultySelectionPageFormatOptionContainerItems").children[0].classList.add("selectIcon");
        e.target.closest(".DifficultySelectionPageFormatOptionContainerItems").children[3].classList.add("selectTag");

    }

});