function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getElementinnertext(elementId) {
  const element = document.getElementById(elementId);
  const elementValuetext = element.innerText;
  const elementtext = parseInt(elementValuetext);
  return elementtext;
}

function getElementtext(elementId) {
  const element = document.getElementById(elementId);
  const elementValuetext = element.innerText;
  return elementValuetext;
}
function setInnertextbyid(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  const index = Math.floor(Math.random() * 25);
  const alphabet = alphabets[index];
  return alphabet;
}
