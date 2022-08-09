let thankYouCard = document.querySelector(".thank-you-state");
let submit = document.querySelector(".submit");
let rating = document.querySelector(".rating");

function showThanks() {
    if (thankYouCard.style.display === "block") {
        thankYouCard.style.display = "none";
        rating.style.display = "block"
    }
    else{
        thankYouCard.style.display = "none";
    }
}

submit.addEventListener("click", showThanks());