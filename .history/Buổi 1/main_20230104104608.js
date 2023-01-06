let result = "";
const productList = document.querySelector("#product");
const products = ["product A", "product B", "product C"];
for (let i = 0; i < products.length; i++) {
  result += "<div>" + products[i] + "</div>";
}
productList.innerHTML(r
