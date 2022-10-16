const gameArena = document.querySelector(".gameArena");
const xana1 = document.querySelector(".xana1");
const xana2 = document.querySelector(".xana2");
const xana3 = document.querySelector(".xana3");
const xana4 = document.querySelector(".xana4");
const xana5 = document.querySelector(".xana5");
const xana6 = document.querySelector(".xana6");
const xana7 = document.querySelector(".xana7");
const xana8 = document.querySelector(".xana8");
const xana9 = document.querySelector(".xana9");
const x = document.querySelector(".x");
const o = document.querySelector(".o");

var xanalar = [xana1, xana2, xana3, xana4, xana5, xana6, xana7, xana8, xana9];

var sira = true;
let winner = "nobody";

function compXana(xanalar) {
  var xana = xanalar[Math.floor(Math.random() * xanalar.length)];
  if (xana.classList.length === 1) {
    xana.classList.add("O");
    xana.innerHTML = `<h1 class="x symbol">O</h1>`;
    checkWinner(xanalar);
    if (winner == "nobody") {
      sira = true;
    } else {
      console.log(winner);
      showWinnerMessage(winner);
    }
  } else {
    compXana(xanalar);
  }
}

gameArena.addEventListener("click", (e) => {
  if (sira) {
    if (e.target.classList.length === 1) {
      e.target.classList.add("X");
      e.target.innerHTML = `<h1 class="x symbol">X</h1>`;
      checkWinner(xanalar);
      if (winner == "nobody") {
        sira = false;
      } else {
        console.log(winner);
        showWinnerMessage(winner);
      }
      compXana(xanalar);
    }
  }
});

function checkWinner(xanalar) {
  // Check horizontal winner
  if (
    xanalar[0].classList[1] == xanalar[1].classList[1] &&
    xanalar[0].classList[1] == xanalar[2].classList[1]
  ) {
    winner = xanalar[0].classList[1];
  } else if (
    xanalar[3].classList[1] == xanalar[4].classList[1] &&
    xanalar[3].classList[1] == xanalar[5].classList[1]
  ) {
    winner = xanalar[3].classList[1];
  } else if (
    xanalar[6].classList[1] == xanalar[7].classList[1] &&
    xanalar[6].classList[1] == xanalar[8].classList[1]
  ) {
    winner = xanalar[6].classList[1];
  }

  // Check vertical winner
  else if (
    xanalar[0].classList[1] == xanalar[3].classList[1] &&
    xanalar[0].classList[1] == xanalar[6].classList[1]
  ) {
    winner = xanalar[0].classList[1];
  } else if (
    xanalar[1].classList[1] == xanalar[4].classList[1] &&
    xanalar[1].classList[1] == xanalar[7].classList[1]
  ) {
    winner = xanalar[1].classList[1];
  } else if (
    xanalar[2].classList[1] == xanalar[5].classList[1] &&
    xanalar[2].classList[1] == xanalar[8].classList[1]
  ) {
    winner = xanalar[2].classList[1];
  }

  //Check X winner
  else if (
    xanalar[0].classList[1] == xanalar[4].classList[1] &&
    xanalar[0].classList[1] == xanalar[8].classList[1]
  ) {
    winner = xanalar[0].classList[1];
  } else if (
    xanalar[2].classList[1] == xanalar[4].classList[1] &&
    xanalar[2].classList[1] == xanalar[6].classList[1]
  ) {
    winner = xanalar[2].classList[1];
  } else {
    winner = "neytral";
  }
}

function showWinnerMessage(winner) {
  if (winner != undefined && winner.toLowerCase() == "x") {
    document.body.innerHTML = `<div class="success_container">
    
    <div class="success_message">
      <p>You Won!</p>
    </div>
    <div class="xbutonu">
      <button onClick="again()" type="submit" id="butt">Play Again</button>
    </div>
  </div>`;
  } else if (winner != undefined && winner.toLowerCase() == "o") {
    document.body.innerHTML = `<div class="success_container">
    <div class="success_message">
      <p>You Lost!</p>
    </div>
    <div class="xbutonu">
      <button onClick="again()" type="submit" id="butt">Play Again</button>
    </div>
  </div>`;
  }
}

const again = () => {
  window.location.reload();
};
