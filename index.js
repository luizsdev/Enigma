const square = document.querySelectorAll(".sqr");
const texto = document.getElementById("perdeu");
const but = document.getElementById("but");
let chances = 5;
let currentTry = 0;
let index = Math.floor(Math.random() * 10);
console.log(index);
square.forEach(elemento => {
  elemento.addEventListener("click", e => {
    e.target.style.backgroundColor = "aqua";
    if (
      square[0].style.backgroundColor == "aqua" &&
      square[3].style.backgroundColor == "aqua" &&
      square[6].style.backgroundColor == "aqua" &&
      square[7].style.backgroundColor == "aqua" &&
      square[8].style.backgroundColor == "aqua" &&
      currentTry <= chances
    ) {
      texto.innerHTML = "VOCÊ GANHOU";
      setTimeout(() => {
        square.forEach(elemento => {
          elemento.style.backgroundColor = "blue";
          texto.innerHTML = "";
          currentTry = 0;
        });
      }, 1000);
    } else if (
      square[2].style.backgroundColor == "aqua" &&
      currentTry == chances - 1
    ) {
      texto.innerHTML = "VOCÊ PERDEU";
      setTimeout(() => {
        square.forEach(elemento => {
          elemento.style.backgroundColor = "blue";
          texto.innerHTML = "";
          currentTry = 0;
        });
      }, 1000);
    } else if (
      square[1].style.backgroundColor == "aqua" &&
      currentTry == chances - 1
    ) {
      texto.innerHTML = "VOCÊ PERDEU";
      setTimeout(() => {
        square.forEach(elemento => {
          elemento.style.backgroundColor = "blue";
          texto.innerHTML = "";
          currentTry = 0;
        });
      }, 1000);
    } else if (
      square[4].style.backgroundColor == "aqua" &&
      currentTry == chances - 1
    ) {
      texto.innerHTML = "VOCÊ PERDEU";
      setTimeout(() => {
        square.forEach(elemento => {
          elemento.style.backgroundColor = "blue";
          texto.innerHTML = "";
          currentTry = 0;
        });
      }, 1000);
    } else if (
      square[5].style.backgroundColor == "aqua" &&
      currentTry == chances - 1
    ) {
      texto.innerHTML = "VOCÊ PERDEU";
      setTimeout(() => {
        square.forEach(elemento => {
          elemento.style.backgroundColor = "blue";
          texto.innerHTML = "";
          currentTry = 0;
        });
      }, 1000);
    }

    currentTry += 1;
  });
});

but.addEventListener("click", () => {
  window.location.reload();
});
