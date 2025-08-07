/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
// En el juego estas dos variables aparecen como constantes, pero hay que cambiarlas a let para poder reasignarlas y usarlas en el bucle
let initialTx = parseInt(inputs[2]); // Thor's starting X position
let initialTy = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // En esta línea se ven los turnos de Thor. No la elimines

    // Write an action using console.log()
    // Creamos estas variables para las direcciones de X e Y (que serían N, S, E, O, NE, SE, NO y SO)
    let directionX = "";
    let directionY = "";

    //Averiguamos la dirección horizontal
    // Si la dirección de Thor con el eje X es mayor a la dirección de la luz con eje X, Thor tendría que retroceder (initialTx--;) hacia la IZQUIERDA, es decir, dirección OESTE
    if(initialTx > lightX){
        directionX = "W";
        initialTx--;
    }
  
    // Si la dirección de Thor con el eje X es menor a la dirección de la luz con eje X, Thor tendría que avanzar (initialTx++;) hacia la DERECHA, es decir, hacia el ESTE
    if(initialTx < lightX){
        directionX = "E";
        initialTx++;
    }

    //Averiguamos la dirección vertical
    // Si la dirección de Thor con el eje Y es mayor a la dirección de la luz con eje Y, Thor tendría que retroceder (initialTy--;) hacia ARRIBA, es decir, dirección NORTE
    if(initialTy > lightY){
        directionY = "N";
        initialTy--;
    }
  // Si la dirección de Thor con el eje Y es menor a la dirección de la luz con eje Y, Thor tendría que avanzar (initialTy++;) hacia ABAJO, es decir, hacia el SUR
    if(initialTy < lightY){
        directionY = "S";
        initialTy++;
    }
    // To debug: console.error('Debug messages...');


    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(directionY + directionX);
}
