let couleurFont = document.getElementById("couleur");
let padding = document.getElementById("padding");
let height = document.getElementById("height");
let width = document.getElementById("width");
let arrondi = document.getElementById("arrondi");
let rot = document.getElementById("rotation");
let titre = document.getElementById("titre");

couleurFont.addEventListener("change", () => {
  titre.style.background =
    "rgb(" + couleur.value + ", " + couleur.value + "," + couleur.value + ")";
})();

padding.addEventListener("change", () => {
  let titre = document.getElementById("titre");
  titre.style.padding = " padding(" + padding.value + " px)";
})();

height.addEventListener("change", () => {
  titre.style.height = "height(" + height.value + "px)";
})();

rot.addEventListener("change", () => {
  titre.style.transform = "rotate(" + rotation.value + "deg)";
})();
