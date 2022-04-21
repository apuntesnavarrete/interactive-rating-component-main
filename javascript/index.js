let button = document.getElementById("for_button")
let card = document.getElementsByClassName("card")[0]
let card_Active = document.getElementsByClassName("card-active")[0]

console.log(button)
console.log(card)

button.addEventListener("click" , (e) => {
    e.preventDefault();

   card.style.display = "none";
   card_Active.style.display ="flex"
})