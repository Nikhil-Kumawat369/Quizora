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

// This event listener injects the Categories Selection Page On Clicking the Explore Categories Btn in Home Page
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "homepageExploreCategoriesBtn"){

        DOM.body.innerHTML = await fun.fetchCategoriesSectionPage();

    }

});

// This event listener injects the Home Page On Clicking the Home Btn in Categories Selection Page
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "CategoriesSelectionPageHomeBtn"){

        DOM.body.innerHTML = await fun.fetchHomePage();

    }

});

// This event listener injects the Format Selection Page On Clicking the Start Quiz Btn on Home Page
DOM.body.addEventListener("click" , async (e) => {

    if(e.target.id === "homepageStartQuizeBtn"){

        DOM.body.innerHTML = await fun.fetchFormatSelectionPage();

    }

});