function getProductById(id) {
  return products.find(function (froduct) {
    return products.id === id;
  });
}
function productInfo(item) {
  return {
    quantity: item.quantity,
    product: getProductById(item.product),
  };
}

function CreateCartItem(item) {
  const template = document.querySelector("#cart-item").textContent.first;
}
