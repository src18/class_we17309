function useState(count) {
  function getCount(count) {
    return count;
  }
  function setCount(count) {
    
  }
  return [count, setCount];
}
const [count, setCount] = useState(0);
const button = document.querySelector("button");
console.log(button);
