const modoBtn = document.getElementById("modo-btn");
const body = document.querySelector("body");

modoBtn.addEventListener("click", () => {
  if (body.classList.contains("modo-claro")) {
    body.classList.remove("modo-claro");
    modoBtn.innerText = "Bravo-Six - Going dark!";
  } else {
    body.classList.add("modo-claro");
    modoBtn.innerText = "Voltar pra Luz!";
  }
});
