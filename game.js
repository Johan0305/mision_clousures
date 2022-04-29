let creategame = () => {
  return (adivina = (num) => {
    let random = Math.floor(Math.random() * 100);
    if (num === random) {
      return "Lo adivinaste, felicitaciones!";
    } else if (num > random) {
      return "Muy alto!";
    } else {
      return "Muy bajo!";
    }
  });
};

const game = creategame();

console.log(game(2));
console.log(game(4));
console.log(game(2));
