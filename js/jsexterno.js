// Archivo de funciones javascript externas

function cambiarColor(idelemento, color){
    document.getElementById(idelemento).style.color=color;
}
function cambiarTamanio(idelemento, tamanio){
    document.getElementById(idelemento).style.fontSize=tamanio;
}
function cambiarFuente1(idelemento, fuente){
    document.getElementById(idelemento).style.fontFamily=fuente;
}
function cambiarFuente2(idelemento, fuente){
    document.getElementById(idelemento).style.fontFamily=fuente;
}
function cambiarTexto(idelemento, texto){
    document.getElementById(idelemento).innerText=texto;
}
function agregarElemento(idelemento, elementohtml){
    document.getElementById(idelemento).innerHTML=document.getElementById(idelemento).innerHTML+elementohtml;
}
function alinearTitulo(idelemento, alineacion){
    document.getElementById(idelemento).style.textAlign=alineacion;
}
function cambiarFondo(idelemento, color){
    document.getElementById(idelemento).style.backgroundColor=color;
}