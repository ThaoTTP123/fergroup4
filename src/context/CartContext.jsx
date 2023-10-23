import { useEffect } from 'react';
import { createContext, useState } from 'react';
const getDedaultCart = () => {
  const cartProduct = localStorage.getItem('items');
  if (cartProduct) return JSON.parse(cartProduct);
  else return [];
};
export const CartContext = createContext({
  items: [],
  getQuantity: () => {},
  add: () => {},
  remove: () => {},
  deleteAll: () => {},
  getTotalCost: () => {},
});
function CartProvider({ children }) {
  const [cartProduct, setCartProduct] = useState(getDedaultCart);
  const getQuantity = (id) => {
    const quantity = cartProduct.find((el) => el.id === id)?.quantity;
    if (quantity === undefined) return 0;
    return quantity;
  };
  const add = (product) => {
    const quantity = getQuantity(product.id);
    if (quantity === 0) {
      setCartProduct((prev) => [...prev, { ...product, quantity: 1 }]);
    } else {
      setCartProduct((prev) =>
        prev.map((el) =>
          el.id === product.id ? { ...el, quantity: el.quantity + 1 } : el
        )
      );
    }
    console.log(cartProduct);
  };
  const remove = (id) => {
    const quantity = getQuantity(id);
    if (quantity === 1) {
      deleteAll(id);
    } else {
      setCartProduct((prev) =>
        prev.map((el) =>
          el.id === id ? { ...el, quantity: el.quantity - 1 } : el
        )
      );
    }
  };
  const deleteAll = (id) => {
    setCartProduct((prev) => prev.filter((el) => el.id != id));
  };
  const getTotalCost = () => {
    let total = 0;
    cartProduct.map((item) => {});
  };
  const contextValue = {
    items: cartProduct,
    getQuantity,
    add,
    remove,
    deleteAll,
    getTotalCost,
  };
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cartProduct));
  }, [cartProduct]);
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
export default CartProvider;
