let ajouter = document.getElementById("ajouter");
let afichage = document.getElementById("afichage");

let nom = prompt("Entez votre nom");

ajouter.addEventListener("click", () => {
  document.write('<table  border="3"  cellspacing="10" >');

  document.write('<tr><td bgcolor="pink" >' + nom + "</td></tr> ");
  document.write("</table>");
  afichage.innerHTML = table;
});

console.log(ajouter);
