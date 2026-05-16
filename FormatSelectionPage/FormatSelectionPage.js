const body = window.document.body;

// This EventListener Manages the active state (UI/UX) of the Format Options
body.addEventListener("click" , (e) => {

    if(e.target.closest(".FormatSelectionPageFormatOptionContainerItems")) {

        const allCards = window.document.body.querySelectorAll(".FormatSelectionPageFormatOptionContainerItems");

        allCards.forEach((val , idx , arr) => {

            val.classList.remove("selectItem");
            val.children[0].classList.remove("selectIcon");
            val.children[3].classList.remove("selectTag");

        });

        e.target.closest(".FormatSelectionPageFormatOptionContainerItems").classList.add("selectItem");
        e.target.closest(".FormatSelectionPageFormatOptionContainerItems").children[0].classList.add("selectIcon");
        e.target.closest(".FormatSelectionPageFormatOptionContainerItems").children[3].classList.add("selectTag");

    }

});