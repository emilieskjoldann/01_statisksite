const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

if (category == null) {
  fetch("https://kea-alt-del.dk/t7/api/products")
    .then((res) => res.json())
    .then(showProducts);
} else {
  fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
    .then((res) => res.json())
    .then(showProducts);
}
function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold

  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".smallProduct .pris").textContent = product.price;
  copy.querySelector(".smallProduct .articletype").textContent = product.articletype;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }

  //produkt er på tilbud
  if (product.discount > 0) {
    copy.querySelector(".discount").textContent = product.discount;
  } else {
    copy.querySelector(".remove_discount").remove();
  }
  copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);
  //appende
  document.querySelector(".productlist").appendChild(copy);
}
