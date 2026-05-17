// Here all the functions used are defined

import * as DOM from "./dom.js";

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