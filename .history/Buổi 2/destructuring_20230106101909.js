const person = {
  name: "Jone",
  age: 30,
  address: {
    street: "123",
  },
};
function showPerson({name, age, address :{}}) {
  console.log();
}
showPerson(person);
