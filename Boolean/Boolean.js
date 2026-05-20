const body = window.document.body;

// This event listener addes the opt select css
body.addEventListener("click" , (e) => {

    if(e.target.closest(".options")){

        const options = window.document.body.querySelectorAll(".options");

        // Removing the selected options
        options.forEach((val , idx , arr) => {

            val.classList.remove("selectItem");
            val.children[0].classList.remove("selectTag");

        });

        // Adding CSS To the selected Options
        e.target.closest(".options").classList.add("selectItem");
        e.target.closest(".options").children[0].classList.add("selectTag");

    }

});