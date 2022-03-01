const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// adding
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 25, ...numbers.slice(index)];
console.log(added);

// removing
const removed = numbers.filter((number) => number !== 1);
console.log(removed);

// updating
const updated = numbers.map((number) =>
  number === 5 ? number ** 2 : number / 2
);
console.log(updated);
