import { produce } from "immer";

let book = { name: "The Redux bible book by Liedji.", isPublished: false };
let updated = produce(book, (draftBook) => {
  draftBook.isPublished = true;
});

console.log(book, updated);
