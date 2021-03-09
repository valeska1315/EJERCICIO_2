var titulo_html = document.getElementById('Titulo');
var caja_html = document.getElementById ('Caja');
var boton_html = document.getElementById('Boton');

function sriptTitulo(){
 
    titulo_html.classList.remove("Titulo");
    titulo_html.classList.add("Titulo2");
};
function sriptCaja(){
  caja_html.classList.add("Caja2");
};
boton_html.addEventListener('click', sriptCaja);

boton_html.addEventListener('click', sriptTitulo);