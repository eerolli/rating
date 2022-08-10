let thankYouCard = document.querySelector(".thank-you-state");
let ratingCard = document.querySelector(".rating");
let submit = document.querySelector(".submit");
let numbers = document.querySelectorAll(".number");
let selectedScore = document.querySelector(".selected-score");

submit.addEventListener("click", () =>{
    thankYouCard.style.display = "block";
    ratingCard.style.display = "none";
})

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        selectedScore.textContent = number.textContent;
    })
})