const Hangman = function(word, guess) {
  this.word = word.split("");
  this.guess = guess;
  this.guessletters = [];
  this.status = `Playing`;
};
Hangman.prototype.Status = function() {
  const status = this.word.every(Item => this.guessletters.includes(Item));
  if (this.guess <= 0) {
    this.status = "Failed";
    return `Nice Try! The Word Was ${this.word.join("")}`;
  } else if (status) {
    this.status = "Finished";
    return "Greate Work! You Guessed The Word";
  } else {
    this.status = "Playing";
    return `Playing Guesses Left = ${this.guess}`;
  }
};
Hangman.prototype.Guess = function(guessletter) {
  const isBadGuess = !this.word.includes(guessletter);
  const isUnique = !this.guessletters.includes(guessletter);
  if (this.status !== "Playing") {
    return this.ExposeData();
  }
  if (isBadGuess) {
    this.guess--;
  }
  if (isUnique) {
    this.guessletters.push(guessletter);
  }
  return this.ExposeData();
};
Hangman.prototype.ExposeData = function() {
  let Data = "";
  this.word.forEach(element => {
    if (this.guessletters.includes(element)) {
      Data += element;
    } else {
      Data += "*";
    }
  });
  return Data;
};
