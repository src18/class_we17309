// let result = "";
const productList = document.querySelector("#productList");
const products = ["product A", "product B", "product C"];
// for (let i = 0; i < products.length; i++) {
//   result += "<div>" + products[i] + "</div>";
// }
const result = products.map((product) => {
  //   return "<div>" + product + "</div>";
  //   console.log(product);
  return `<div> ${product} </div>`;
});
productList.innerHTML = result.join("");    
console.log(result.join(""));
(() => {console.log();})()
