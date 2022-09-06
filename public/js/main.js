let active
const rating = document.querySelectorAll(".num")
const button = document.getElementById("submit")
let error = document.getElementById("error")

rating.forEach((item, idx) => {
    item.addEventListener("click", function(){
        if (active != undefined) {
            rating[active].classList.remove("active")
        }
        rating[idx].classList.add("active")
        error.classList.add("no-display")
        active = idx
    })
})
button.addEventListener("click", function(){
    let rating = document.querySelector(".rating-main")
    let thanks = document.querySelector(".thanks")
    let parag = document.getElementById("thanks-par")
    if (active == undefined) {
        error.classList.remove("no-display")
        return;
    }
    parag.textContent = "You selected "+ String(active+1) +" out of 5"
    rating.classList.add("no-display")
    thanks.classList.remove("no-display")
})