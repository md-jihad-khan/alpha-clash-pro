function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;
  if (playerPressed === "Escape") {
    gameover();
  }

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  if (playerPressed === expectedAlphabet) {
    removeBackgroundColorById(expectedAlphabet);
    const currentScore = getElementinnertext("score");
    const updatedscore = currentScore + 1;
    setInnertextbyid("score", updatedscore);
    continueGame();
  } else {
    const currentlife = getElementinnertext("life");
    const updatedlife = currentlife - 1;
    setInnertextbyid("life", updatedlife);

    if (updatedlife === 0) {
      gameover();
    }
  }
}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  const alphabet = getARandomAlphabet();
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home");
  showElementById("playGround");
  continueGame();
}
function playagain() {
  hideElementById("score-section");
  showElementById("playGround");
  setInnertextbyid("life", 3);
  setInnertextbyid("score", 0);

  continueGame();
}

function gameover() {
  hideElementById("playGround");
  showElementById("score-section");
  const finalscore = getElementinnertext("score");
  setInnertextbyid("final-score", finalscore);
  const alphabet = getElementtext("current-alphabet");
  removeBackgroundColorById(alphabet);
}
