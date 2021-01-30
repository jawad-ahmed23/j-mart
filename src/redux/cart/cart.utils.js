export const addItemToCart = (cartItems, ItemToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === ItemToAdd.id
  );
  if (existingItem) {
    return increaseItemQty(cartItems, existingItem);
  }

  // if (!ItemToAdd.quantity) {
  //   return [...cartItems, { ...ItemToAdd, quantity: 1 }];
  // }
  return [...cartItems, { ...ItemToAdd, quantity: 1 }];
};

export const increaseItemQty = (cartItems, item, q = 1) => {
  return cartItems.map((cartItem) => {
    return cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity + q }
      : cartItem;
  });
};

export const deleteItem = (cartItems, item) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

export const decreaseQty = (cartItems, item) => {
  const findCartItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (findCartItem.quantity === 1) {
    return deleteItem(cartItems, item);
  }

  return increaseItemQty(cartItems, findCartItem, -1);
};

export const getTotalPrice = (cartItems) => {
  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return subTotal;
};
