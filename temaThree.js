console.log("Exercitiul 1:");
function recipeIngredients(titlu, portii, ingrediente) {
  const recipe = {
    titlu,
    portii,
    ingrediente,
  };

  console.log(recipe);
}
recipeIngredients("Pizza", 3, ["tomato sauce", "mozzarela"]);

console.log("\n\n");

console.log("Exercitiul 2:");

const removeItem = (obiect, proprietate) => {
  const newobiect = { ...obiect };
  delete newobiect[proprietate];

  return newobiect;
};
console.log(removeItem({ a: 1, b: 2 }, "b"));

//---------------------------------------------------

console.log("\n\n");
console.log("Exercitiul 3:");

const booksList = [
  {
    titlu: "Carte 1",
    autor: "Autor 1",
    esteCitita: true,
  },
  {
    titlu: "Carte 2",
    autor: "Autor 2",
    esteCitita: false,
  },
];
console.log(booksList);

const readBooks = (books) => {
  books.forEach((value) => {
    console.log(`"${value.titlu} ${"de"} ${value.autor}`);
    if (value.esteCitita === true)
      console.log(`"Ai citit deja "${value.titlu}" de ${value.autor}"`);
    else console.log(`"Trebuie sa citesti "${value.titlu}" de ${value.autor}"`);
  });
};
readBooks(booksList);
