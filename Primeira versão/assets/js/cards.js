
function exibirCards() {
  let hiddenCardsProjetos = document.querySelector(".hidden-cards-projetos");
  hiddenCardsProjetos.style.display = "flex";
  document.getElementById("mostrar").style.display = "none";
  document.getElementById("esconder").style.display = "block";
}

function ocultarCards() {
  let hiddenCardsProjetos = document.querySelector(".hidden-cards-projetos");
  hiddenCardsProjetos.style.display = "none";
  document.getElementById("esconder").style.display = "none";
  document.getElementById("mostrar").style.display = "block";
}
