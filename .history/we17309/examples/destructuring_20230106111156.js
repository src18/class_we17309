function useState(count) {
  let state = count;
  function getCount() {
    return state;
  }
  function setCount(newCount) {
    // state = newCount;
    return sta 
  }
  return [state, setCount];
}
const [count, setCount] = useState(0);
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
  setCount(count + 1);
  console.log(count);
});
