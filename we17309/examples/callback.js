const myDisplay = (content) => {
  document.querySelector("#app").innerHTML = content;
};
const myCallBack = (a, b, callBack) => {
  callBack(a + b);
};
myCallBack(5, 6, myDisplay);
