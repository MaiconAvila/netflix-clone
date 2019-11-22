let videoPrincipal = document.querySelector(".imagem-inicial");
videoPrincipal.addEventListener("mouseenter", iniciarVideo);
videoPrincipal.addEventListener("mouseout", terminarVideo);

function iniciarVideo() {
  videoPrincipal.src = "assets/imagem-inicial.webp";
}

function terminarVideo() {
  videoPrincipal.src = "assets/imagem-inicial.webp";
}
/*===============*/
let barraPesquisa = document.querySelector('.barraPesquisa')

function abrirBarra() {
  if("onclick") {
    barraPesquisa.style.display = "flex";

  }
}

let borderPesquisa = document.querySelector('.borderPesquisa')

function borderBarra() {
  if(barraPesquisa.style.display === "flex") {
    borderPesquisa.style.border = "1 white"
    borderPesquisa.style.padding = "5"
  } else if(barraPesquisa.style.display === "none") {
    borderPesquisa.style.border = "none"
  }
}