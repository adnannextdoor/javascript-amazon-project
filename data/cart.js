export const cart = [];

export function addtocart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.id) {
      matchingItem = cartItem
    }
  })

  if (matchingItem) {
    matchingItem.quantity++;
  } else {
    cart.push({
    id: productId,
    quantity: 1
  });}
}