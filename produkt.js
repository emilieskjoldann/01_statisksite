fetch("https://kea-alt-del.dk/t7/api/products/1163")
  .then((Response) => Response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;
  document.querySelector(".purchaseBox .brand").textContent = product.brandname;
  document.querySelector(".info .basecolour").textContent = product.basecolour;
  document.querySelector(".info .inventorynumber").textContent = product.inventorynumber;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
