{const playGame =  playerInput => {

  clearMessages();
  
  let percent = 50; // winning percent
  const moves = {
    0:{
      name: "kamień",
      icon: "kamien.jpg",
      win: ['2', '3'],
      lose: [0, 1, 4]},
    1:{
      name: "papier",
      icon: "paper.jpg",
      win: ['0', '4'],
      lose: [1, 2, 3]},
    2:{
      name: "nożyce",
      icon: "scissors.jpg",
      win: ['1', '3'],
      lose: [0, 2, 4]},
    3:{
      name: "jaszczurka",
      icon: "jaszczurka.jpg",
      win: ['1', '4'],
      lose: [0, 2, 3]},
    4:{
      name: "spock",
      icon: "spock.jpg",
      win: ['1', '2'],
      lose: [0, 3, 4]},
  };

  const calculateChance = playerInput => {
    const posib = {};
    const wins = moves[playerInput].win;
    const loses = moves[playerInput].lose;
    let winPercent = Math.round(percent/wins.length)/100;
    let losePercent = Math.round((100-percent)/loses.length)/100;
    
    for(let w of wins){
      posib[w] = winPercent;
    }
    for(let l of loses){
      posib[l] = losePercent;
    }
    return posib;
  }

  const posib = calculateChance(playerInput);

  const weightedPosib = posib => {
    let i, sum=0, r=Math.random();
    for (i in posib) {
      sum += posib[i];
      if (r <= sum) return i;
    }
  }
  
  const randomNumber = weightedPosib(posib);
  
  const displayResult = (argComputerMove, argPlayerMove) => {
    let winer = moves[argPlayerMove];
    let index = winer.win.indexOf(argComputerMove);
    let move = moves[argComputerMove];
    
    printMessage("<img src='images/" + move.icon + "' alt='" + move.name + "'>", "", "#computerBox");
    
    if(argComputerMove == argPlayerMove){
      printMessage("Remis", "deuce");
      scores[2]++;
    } else {
      if(index < 0){
        printMessage("Przegrywasz", "lose");
        printMessage(++scores[1], "lose", "#lose");
      } else {
          printMessage("Wygrywasz", "win");
          printMessage(++scores[0], "win", "#win");
      }
    }
  }
  displayResult(randomNumber, playerInput);
}

let buttons = document.querySelectorAll('.btn');
for(let button of buttons){
  button.addEventListener('click', () => {
    buttons.forEach(el => {el.classList.remove("active")});
    button.classList.add("active");
    playGame(button.value);
  })
}

const scores = [0,0,0];

document.getElementById("newGame").addEventListener("click", () => {
  scores[0] = 0;
  scores[1] = 0;
  scores[2] = 0;
  printMessage("<p><strong>Zagrajmy</strong><br> <span>Wybierz symbol<br> aby zacząć grę</span></p>", "", "#computerBox");
  printMessage("Zaczynajmy","win");
  printMessage(scores[0], "win", "#win");
  printMessage(scores[1], "lose", "#lose");
  buttons.forEach(el => {el.classList.remove("active")});
})
}