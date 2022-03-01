const person = {
  name: "liedji",
  address: { country: "Cameroon", city: "Dschang" },
};
const updated_person = {
  ...person,
  address: { ...person.address, city: "Bafoussam" },
  name: "liedji updated version 2",
};
console.log(person);
console.log(updated_person);
