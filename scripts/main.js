var map = {
    y: 20,
    x: 10,
    tamano: 20
};

var bucle;
var puntuacion = 0; 

var mapa = crearMapa(map);

// mapa[mapa.length-2][1]=1;
// mapa[mapa.length-2][2]=1;
// mapa[mapa.length-2][3]=1;
// mapa[mapa.length-2][4]=1;
// mapa[mapa.length-2][5]=1;
// mapa[mapa.length-2][6]=1;
// mapa[mapa.length-2][7]=1;
// mapa[mapa.length-2][8]=1;
// mapa[mapa.length-2][9]=1;


// mapa[mapa.length-3][1]=1;
// mapa[mapa.length-3][2]=1;
// mapa[mapa.length-3][3]=1;
// mapa[mapa.length-3][4]=1;
// mapa[mapa.length-3][5]=1;
// mapa[mapa.length-3][6]=1;
// mapa[mapa.length-3][7]=1;
// mapa[mapa.length-3][8]=1;
// mapa[mapa.length-3][9]=1;

var aux = 0

var piezaActual = {};
var mapaCaida = {};

function main() {
    // colisiones("hola");
    var lienzo = document.getElementById("lienzo");
    lienzo.width = map.tamano * mapa[0].length;
    lienzo.height = map.tamano * mapa.length;
    var ctx = lienzo.getContext("2d");

    piezaRandom();
    inicio(ctx);
    pintarMundo(ctx, mapa);
    mando(ctx);
}

function inicio(ctx) {
    console.log("*** Tetris cargado ***");
    var contador = 0;
    
    bucle = setInterval(function() {
        refresh(ctx);
        piezaActual.mY++; 
         if(colisionAbj()) {
            piezaActual.mY--; 
            completoAbajo();
            piezaRandom();
                     
        }  
        gameOver();
      
    }, 500);
    
}

// Refresh
function refresh(ctx) {
    ctx.clearRect(0, 0, lienzo.width, lienzo.height);   
    pintarPieza(ctx, piezaActual);
    pintarMundo(ctx, mapa);
}




// girar pieza
function girar(pza) {
    
	var salida = [];
	for (var x = 0; x < pza[0].length; x++) {
		salida.push([]);
		for(var y = pza.length-1; y >= 0; y--) {
			salida[x].push(pza[y][x]);
		}
	}
	
	return salida;
}


// Funcion que crea un mapa 
function crearMapa(entrada) {
    var salida = [];
    for(var y = 0; y < entrada.y+2; y++) {
        salida.push([]);
        for(var x = 0; x < entrada.x+2; x++) {
           if(x == 0 || x == entrada.x+1 || y == entrada.y+1) {
                salida[y][x] = 1;
            }
            else {
                salida[y][x] = 0;
            }
        }
    }
    return salida;
}

// Las colisiones
// 
function colisionLat() {
    var colisiona = false;
    for(var y = 0; y < piezaActual.ahora.length && !colisiona; y++) {
        for(var x = 0; x < piezaActual.ahora[y].length && !colisiona; x++) {
            if(piezaActual.ahora[y][x]) {
                
                if(mapa[y+piezaActual.mY][piezaActual.mX + x]) {
                    colisiona = true;
                }
            }
        }

    }
    return colisiona;
}

function colisionAbj() {
    var colisiona = false;
    for(var y = 0; y < piezaActual.ahora.length && !colisiona; y++) {
        for(var x = 0; x < piezaActual.ahora[y].length && !colisiona; x++) {
            if(piezaActual.ahora[y][x]) {
                if(mapa[y+piezaActual.mY][piezaActual.mX + x]) {
                    colisiona = true;
                }
            }
        }

    }
    
    if(colisiona) {
        for(var y = 0; y < piezaActual.ahora.length; y++) {
            for(var x = 0; x < piezaActual.ahora[y].length; x++) {
                
                if(piezaActual.ahora[y][x]) {
                    mapa[y+piezaActual.mY-1][piezaActual.mX + x] = 1;     
                }
            }

        }
        return colisiona;        
    }
}

// Comprobar si se completan las lineas

function completoAbajo() {
    var caida = 0; 
    var ultimaPos = 0;
    for(var y = mapa.length-2; y >= 0; y-- ) {
        if(mapa[y].unique()[0] == 1 && mapa[y].unique().length == 1) {
            caida++;
            ultimaPos = y;
            console.log(y);
            for(var x = 1; x < mapa[y].length-1; x++) { 
                mapa[y][x] = 0;
            }

    
        }
    }

    if(caida != 0 && ultimaPos != 0) {

        var obj = document.querySelector("#puntuacion span");

        for(var y = ultimaPos; y >= 0; y--) {
            for(var x = 0; x < mapa[y].length; x++) {
                mapa[y+caida][x] = mapa[y][x];
            }
        }

        obj.innerHTML = parseInt(obj.innerHTML)+(caida * 100);
        reconstruirMapa();
        
    }
    
    
}

// Funcion de game over

function gameOver() {
    
    var colision = false;
    for(var x = 1; x < mapa[0].length-1 && !colision; x++) {
        if(!!mapa[0][x]) {
            colision = true;
        }        
    }
    if(colision) {
        alert("Game Over");
        clearInterval(bucle);
    }
}

function reconstruirMapa() {
    for(var x = 0; x < mapa[0].length; x++) {
        mapa[mapa.length-1][x] = 1;
    }
}
// Agregar unique a array
Array.prototype.unique=function(a){
  return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

window.addEventListener("load", main, false);