//read more read Less

function readMore(city) { //finds function
    let dots = document.querySelector(`.card[data-city="${city}"] .dots`); //returns element that has the ID attribute with value, searches for dots
    let moreText = document.querySelector(`.card[data-city="${city}"] .more`); // '' '' searches for more
    let btnText = document.querySelector(`.card[data-city="${city}"] .myBtn`); // '' '' searches for button

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more"; //button says read more to show more text
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less"; //button says read less to show less text
        moreText.style.display = "inline";
    }
}
