// Occurrence.js
console.log("Occurrence: ");

const occurrence = (mot, lettre) => {
  let result = 0;
  mot.split("").forEach((el) => {
    el === lettre ? result++ : null;
  });
  return result;
};
// Test de la fonction
console.log(occurrence("javascript", "a")); // Résultat attendu : 2
console.log(occurrence("programmation", "p")); // Résultat attendu : 1

// Inverse.js
console.log("\nInverse: ");
const inverse = (motOuPhrase) => {
  if (motOuPhrase.includes(" ")) {
    return (
      motOuPhrase.split(" ").reverse().join(" ") +
      "\n" +
      motOuPhrase.split("").reverse().join("")
    );
  } else return motOuPhrase.split("").reverse().join("");
};
// Test de la fonction
console.log(inverse("bonjour")); // Résultat attendu : ruojnob
console.log(inverse("je suis une phrase")); // Résultat attendu : phrase une suis je

// Pair.js
console.log("\nPair:");
const estPair = (num) => num % 2 == 0;

// Test de la fonction
console.log(estPair(4)); // Résultat attendu : true
console.log(estPair(7)); // Résultat attendu : false

// Tri.js
console.log("\nTri:");

const personnes = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 30 },
  { nom: "Charlie", age: 20 },
];

const tri = (array, prop) => {
  array.sort((a, b) => a[prop] - b[prop]);
  return array;
};

console.log(tri(personnes, "nom"));
// Résultat attendu : [{ nom: "Alice", age: 25 }, { nom: "Bob", age: 30 }, { nom: "Charlie", age: 20 }]

console.log(tri(personnes, "age"));
// Résultat attendu : [{ nom: "Charlie", age: 20 }, { nom: "Alice", age: 25 }, { nom: "Bob", age: 30 }]

// Calculatrice.js
console.log("\nCalculatrice:");

const addition = (num1, num2) => num1 + num2;
const soustraction = (num1, num2) => num1 - num2;
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

const calculatrice = (num1, num2, callback) => callback(num1, num2);

// Test de la fonction
console.log(calculatrice(5, 3, addition)); // Résultat attendu : 8
console.log(calculatrice(5, 3, soustraction)); // Résultat attendu : 2
console.log(calculatrice(5, 3, multiplication)); // Résultat attendu : 15
console.log(calculatrice(6, 2, division)); // Résultat attendu : 3

console.log("\nTableaux:");
const tableau1 = [1, 3, 5, 7];
const tableau2 = [2, 4, 6, 8];
const tableau3 = [9, 10, 11];
const tableau4 = [12, 13, 14];

const fusionnerTableaux = (arr1, arr2, sort) => {
  const result = [...arr1, ...arr2];
  return sort === "desc" ? result.sort((a, b) => b - a) : result.sort();
};
console.log(fusionnerTableaux(tableau1, tableau2));
// Résultat attendu : [1, 2, 3, 4, 5, 6, 7, 8]

// Test de la fonction bonus
console.log(fusionnerTableaux(tableau1, tableau2, "asc"));
// Résultat attendu : [1, 2, 3, 4, 5, 6, 7, 8]
console.log(fusionnerTableaux(tableau1, tableau2, "desc"));
// Résultat attendu : [8, 7, 6, 5, 4, 3, 2, 1]

// // Test de la fonction bonus 2
// console.log(fusionnerTableaux(tableau1, tableau2,tableau3,tableau4));
// // Résultat attendu : [1, 2, 3, 4, 5, 6, 7, 8, ...]
