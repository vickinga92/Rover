const rover = {
  directions : 'N',
  x : 0,
  y : 0,
  travelLog : [0,0] 
}

function turnRigth (rover) {
  console.log ('El rover gira a la derecha')
  switch (rover.directions) {
    case 'N':
    rover.directions= 'E'
    break;
    case 'E':
    rover.directions= 'S'
    break;
    case 'S':
    rover.directions= 'W'
    break;
    case 'O':
    rover.directions= 'N'
    break;
  }
}
function turnLeft (rover) {
  console.log ('El rover gira a la izquierda')
  switch (rover.directions) {
    case 'N':
      rover.directions= 'W'
      break;
    case 'W' :
      rover.directions= 'S'
      break;
    case 'S' :
      rover.directions= 'E'
      break;
    case 'E' :
      rover.directions= 'N'      
      break;
  }
}

function moveFoward (rover) {
  switch (rover.directions) {
    case 'N':
      rover.y = rover.y - 1
    break;
    case 'E':
      rover.x = rover.x + 1 
    break;
    case 'S':
      rover.y = rover.y + 1
    break;  
    case 'W':
      rover.x = rover.x -1
    break;
  }
}


function goFoward (String) {
  for (i = 0; i < String.length; i++) {
    switch (String[i]) {
      case 'r':
        turnRigth (rover)
      case 'l' :
        turnLeft (rover)
      case 'f' :
        moveFoward (rover)
}
}
}




