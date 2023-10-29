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
  addOne: () => {},
  addMultiple: () => {},
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
  const addOne = (product) => {
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
  const addMultiple = (product, num) => {
    const quantity = getQuantity(product.id);
    if (quantity === 0) {
      setCartProduct((prev) => [...prev, { ...product, quantity: num }]);
    } else {
      setCartProduct((prev) =>
        prev.map((el) =>
          el.id === product.id ? { ...el, quantity: el.quantity + num } : el
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
    if (cartProduct.length > 0) {
      cartProduct.map((item) => {
        total = total + item.price * item.quantity;
      });
    }
    return total;
  };
  const contextValue = {
    items: cartProduct,
    getQuantity,
    addOne,
    addMultiple,
    remove,
    deleteAll,
    getTotalCost,
  };
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cartProduct));
    if (cartProduct.length === 0) {
      localStorage.removeItem('items');
    }
  }, [cartProduct]);
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
export default CartProvider;
