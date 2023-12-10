const newTotalQuantity = cart.totalQuantity + 1;
const updatedItems = cart.items.slice();
const existingItem = updatedItems.find((item) => item.id === product.id);
if (existingItem) {
  const updatedItem = { ...existingItem };