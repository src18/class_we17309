const add1 = ({ a, b, ...other }) => {
  console.log(a);
  console.log(b);
  console.log(other);
};
const add2 = (a, b, ...other) => {
  console.log(a);
  console.log(b);
  console.log(other);
};
add1({ a: 1, b: 2, c: 3, d: 4, e: 5 });
add2(1, 2, 3, 4, 5);
