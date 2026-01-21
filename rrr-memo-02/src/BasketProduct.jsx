import { useState, memo } from "react";

const BasketProduct = () => {
  console.log('render Cart')
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);

  const addCount = (id) => {
   setCart(cart.map((item) => 
    item.id === id ? {...item, count: item.count + 1} : item
))}

const deleteProduct = (id) => {
    setCart(cart.filter(item => item.id !== id))
}

const clearBasket = () => {
    setCart([])
}

  return (
    <>
      <h2>Корзина товаров</h2>
      {cart.map(({ id, title, count }) => (
        <p>
          {title} (Кол-во: {count}){" "}
          <button onClick={() => addCount(id)}>+1</button>
          <button onClick={() => deleteProduct(id)}>Удалить</button>
        </p>
      ))}
      <button onClick={clearBasket}>Очистить корзину</button>
    </>
  );
};

export default memo(BasketProduct);
