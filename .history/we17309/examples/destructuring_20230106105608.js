function useState(count) {
  let state = count;
  function getCount() {
    return state;
  }
  function setCount(newCount) {
    state = newCount;
  }
  return [state, Count];
}
const [count, setCount] = useState(0);
const button = document.querySelector("button");
console.log(button);
