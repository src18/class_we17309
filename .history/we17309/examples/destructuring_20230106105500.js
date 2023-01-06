function useState(count) {
  let state = count;
  function getCount() {
    return state;
  }
  function setCount(newcount) {
    cou;
  }
  return [count, setCount];
}
const [count, setCount] = useState(0);
const button = document.querySelector("button");
console.log(button);
