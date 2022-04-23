let button = document.getElementById("for_button");
let card = document.getElementsByClassName("card")[0];
let card_Active = document.getElementsByClassName("card-active")[0];
let number = document.getElementsByClassName("number")[0];

let select = 0;

function holi() {
  if (document.getElementById("option_one").checked) {
    select = 1;
  }
  if (document.getElementById("option_two").checked) {
    select = 2;
  }
  if (document.getElementById("option_three").checked) {
    select = 3;
  }
  if (document.getElementById("option_four").checked) {
    select = 4;
  }
  if (document.getElementById("option_five").checked) {
    select = 5;
  }

  return select;
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  holi();
  number.innerHTML = select;
  card.style.display = "none";
  card_Active.style.display = "flex";
});
