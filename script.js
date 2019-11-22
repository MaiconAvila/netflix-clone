let videoPrincipal = document.querySelector(".imagem-inicial");
videoPrincipal.addEventListener("mouseenter", iniciarVideo);
videoPrincipal.addEventListener("mouseout", terminarVideo);

function iniciarVideo() {
  videoPrincipal.src = "assets/twd.gif";
}

function terminarVideo() {
  videoPrincipal.src = "assets/images (1).jfif";
}
/*===============*/
