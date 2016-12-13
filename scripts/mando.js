

// Er mando
function mando(ctx) {
    window.addEventListener("keydown", function(e) {
        
        var codigoTecla = (e && e.which) ? e.which : e.keyCode;
        switch(codigoTecla) {
            case 37: case 65:
                // Movimiento a la izquierda
                e.preventDefault(); 
                 piezaActual.mX -= 1;
                if(colisionLat()) {
                   piezaActual.mX += 1;
                }
                refresh(ctx);
                //inicio();
                break;
            case 39: case 68:
                // Movimiento a la derecha
                e.preventDefault();
                
                piezaActual.mX += 1; 

                if(colisionLat()) {
                    piezaActual.mX -= 1;
                }
            
                refresh(ctx);
                break;
            case 38: case 87:
                // Movimiento de giro
                e.preventDefault();
                piezaActual.ahora = girar(piezaActual.ahora);
                if(colisionLat()) {
                    piezaActual.ahora = girar(girar(girar(piezaActual.ahora)));
                }
                refresh(ctx);
                break;
            case 40: case 83: 
                // Acelerar la caida
                e.preventDefault();
                piezaActual.mY += 1;
                if(colisionAbj()) {
                    piezaActual.mY--;
               
                }
                refresh(ctx);
                break;
        }
        //console.log(codigoTecla);
    }, false);
}
