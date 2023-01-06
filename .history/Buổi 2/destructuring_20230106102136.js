const person = {
  name: "Jone",
  age: 30,
  address: {
    street: "123",
  },
};
function showPerson({ name, age, address: { street } }) {
  console.log(`name: ${name}, age: ${age}, address: ${street}`);
}
showPerson(person);
