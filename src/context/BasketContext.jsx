import React, { createContext } from "react";
import useCustomeLocal from "../hooks/useCustomeLocal";

export const BasketContext = createContext("");

function BasketProvider({ children }) {
  const [basket, setBasket] = useCustomeLocal("basket", []);
  function addBasket(item) {
  
    const index = basket.findIndex((x) => x.id === item.id);
    if (index == -1) {
      setBasket([...basket, { ...item, count: 1 }]);
      return;
    }
    basket[index].count++;
    setBasket(basket);
  }
  function increaseCount(id) {
    console.log(id);
    const index = basket.findIndex((x) => x.id === id);
    basket[index].count++
    setBasket([...basket])
    console.log(basket[index].count);
        
  }
  function decreaseCount(id) {
    const index = basket.findIndex((x) => x.id === id);
    basket[index].count--
    setBasket([...basket])
        
  }
  return (
    <BasketContext.Provider value={{ addBasket, basket,increaseCount,decreaseCount}}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;
