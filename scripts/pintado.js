// Random de piezas
function piezaRandom() {
    var r = Math.floor(Math.random()*piezas.length);
    // var r = 3;
    piezaActual.ahora = piezas[r];
    piezaActual.mX = 4;
    piezaActual.mY = 0;
}


// Pintado de piezas
function pintarPieza(ctx, pieza) {  
    
    var piezaFinal = pieza.ahora;
    var posX = pieza.mX * map.tamano;
    var posY = pieza.mY * map.tamano;


    // hacer una funcion de colores
    ctx.fillStyle = "#009099";
    ctx.strokeStyle = "#2c3e50";


    for(var y = 0; y < piezaFinal.length; y++) {
        for(var x = 0; x < piezaFinal[y].length; x++) {
            if(!!piezaFinal[y][x]) {
                ctx.strokeRect((x*map.tamano)+posX, (y*map.tamano)+posY, map.tamano, map.tamano);
                ctx.fillRect(((x*map.tamano)+1)+posX, (y*map.tamano)+1+posY, (map.tamano-1), (map.tamano-1));
            }
        }
    }   
}

// Pintar Mundo
function pintarMundo(ctx, mapa) {   
    var piezaFinal = mapa;
    var posX = 0;
    var posY = 0;
    // hacer una funcion de colores
    ctx.fillStyle = "#2c3e50";
    ctx.strokeStyle = "#bdc3c7";

    for(var y = 0; y < piezaFinal.length; y++) {
        for(var x = 0; x < piezaFinal[y].length; x++) {
            if(!!piezaFinal[y][x]) {
                ctx.strokeRect((x*map.tamano)+posX, (y*map.tamano)+posY, map.tamano-1, map.tamano-1);
                ctx.fillRect(((x*map.tamano))+posX, (y*map.tamano)+posY, (map.tamano-1), (map.tamano-1));
            }
        }
    }   
}


