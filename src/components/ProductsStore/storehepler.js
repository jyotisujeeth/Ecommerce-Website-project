const newTotalQuantity = cart.totalQuantity + 1;
const updatedItems = cart.items.slice();
const existingItem = updatedItems.find((item) => item.id === product.id);
if (existingItem) {
  const updatedItem = { ...existingItem };
  updatedItem.quantity++;
  updatedItem.price = updatedItem.price + product.price;
  const existingItemIndex = updatedItems.findIndex(
    (item) => item.id === product.id
  );
  updatedItems[existingItemIndex] = updatedItem;
} else {
  updatedItems.push({ ...product, quantity: 1 });
}
const newCart = {
  totalQuantity: newTotalQuantity,
  items: updatedItems,
};
dispatch(cartActions.replaceCart(newCart));
