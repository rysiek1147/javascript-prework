function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
    return 'papier';
  } else if(argMoveId == 3){
    return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayreMove){
  if(computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
  } else if(computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
  } else if(computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz!')
  } else if(computerMove == playerMove) {
    printMessage('Tym razem mamy remis');
  } else if(playerMove == 'nieznany ruch') {
    printMessage('Podano wartość spoza zakresu (1-3)')
  } else {
    printMessage('Niestety przegrywasz :(');
  }
}
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Mój ruch to: ' + computerMove);
printMessage('Twój ruch to: ' + playerMove);
displayResult(computerMove, playerMove);