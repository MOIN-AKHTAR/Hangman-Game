let Word = document.querySelector("#Word");
let Status = document.querySelector("#Status");
let Restart = document.querySelector("#Restart");
const Instance = () => {
  const Instance = new Hangman("amoeba", 4);
  return Instance;
};
let P = Instance();
Restart.addEventListener("click", e => {
  P.guessletters = [];
  P.guess = 4;
  Word.textContent = P.ExposeData();
  Status.textContent = P.Status();
});

Word.textContent = P.ExposeData();
Status.textContent = P.Status();
window.addEventListener("keypress", e => {
  Word.textContent = P.Guess(e.key);
  Status.textContent = P.Status();
});
