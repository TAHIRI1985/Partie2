// let n = parseInt(prompt("Entrez un nombre"));
let i = 0;
let n = 1;

for (n = 1; n <= 10; n++) {
  document.write('<table  border="3"  cellspacing="10" >');
  for (i = 0; i < 10; i++) {
    document.write(
      '<tr><td bgcolor="pink" >' + n + " x " + i + " = " + i * n + "</td></tr> "
    );
  }
  document.write("</table>");
}
