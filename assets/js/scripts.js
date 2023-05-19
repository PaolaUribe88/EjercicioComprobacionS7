//VARIABLES GLOBALES
arregloColores= ['#FF5500', '#FF99B2', '#FF99F5', '#BB99FF', '#99C5FE', '#00CEFF', '#01FFFE', '#00FF9F', '#B6FF01', '#FFFF00', '#FFB600'];
arregloPalabras=['sed', 'vehicula', 'vivamus', 'nam', 'eros', 'vestibulum:','quam', 'sollicitudin', 'finibus', 'dictum', 'morbi'];
arregloReemplazos=['UNO','DOS','TRES','CUATRO','CINCO','SEIS','SIETE','OCHO','NUEVE','DIEZ','ONCE'];
var resultadoTransformado='';

function tranformarTexto(){
    let elParratotxt = document.getElementById('parrafoTexto').innerText;
    resultadoTransformado = elParratotxt;

    let elParrafoTxtTransformado = document.getElementById('parrafoTransformado');

    for(let i= 0; i< arregloColores.length; i++){
    let colorTemporal = arregloColores[i];
    let patron = arregloPalabras[i];
    let arregloTemporal = elParratotxt.matchAll(patron);
    let cantidadTemporal = Array.from(arregloTemporal);

    console.log(`%csed${arregloPalabras[i]}: ${cantidadTemporal.length}`, `color: ${colorTemporal}`);
    resultadoTransformado = resultadoTransformado.replaceAll(`${arregloPalabras[i]}`, `${arregloReemplazos[i]}`);
    elParrafoTxtTransformado.innerText = resultadoTransformado;
   }
}
function asignarEventos(){
    let botonTransformar = document.getElementById('btnTransformar');
    botonTransformar.addEventListener('click', tranformarTexto);
}