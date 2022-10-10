let afficheur = document.getElementById("affich");
let start = document.getElementById("sta");
let stop = document.getElementById("sto");
let reset = document.getElementById("res");

let ms = 0;
let s = 0;
let min = 0;
let h = 0;
let temps;

start.addEventListener("click", function start() {
  temps = setInterval(update_chrono, 100);
  start.disabled = true;
});

function update_chrono() {
  ms++;
  if (ms === 10) {
    s++;
    ms = 1;
  }
  if (s === 60) {
    min++;
    s = 0;
  }
  if (min === 60) {
    h++;
    min = 0;
  }
  afficheur.innerHTML = [h + "h", min + "min", s + "s", ms + "ms"].join(" : ");
}

stop.addEventListener("click", function stop() {
  clearInterval(temps);
  start.disabled = false;
});
reset.addEventListener("click", () => {
  afficheur.textContent = "0 h : 0 min : 0 s : 0ms ";
});
