import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import "./index.scss"
import { SearchFilterContext } from "../../context/SearchFilterContext";

function ProductCards() {
  const [product, setProduct] = useState([]);
  const {inpValue} =
    useContext(SearchFilterContext);
  useEffect(() => {
    getfetch();
  }, []);
  
  async function getfetch() {
    const res = await fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products"
    );
    const data = await res.json();
    setProduct(data);
  }

  return (
    <>
    <div id="productCardsContainer" >{product
      .filter((item)=>item.name.toLowerCase().includes(inpValue.toLowerCase()))
      .map(item=>
        
        <ProductCard item={item} key={item.id} url={item.thumbnail} name={item.name} price={item.price} />
        )
      }
    </div>
        
      </>

  );
}

export default ProductCards;
