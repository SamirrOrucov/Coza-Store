import React, { useContext } from 'react'
import "./index.scss"
import { BasketSliderContext } from '../../context/BasketSliderContext'
function BasketSlider() {
const {isOpen,handleClick}=useContext(BasketSliderContext)
  return (
    <>
    <div className={isOpen?`opacityDiv`:""}></div>
        <div id='basketSlider' className={isOpen?`translate`:''}>
      <div className="basketSlider_container">
        <div className="topSide">
        <h3>Your Cart</h3>
        <i className="fa-solid fa-xmark" onClick={handleClick}></i>
        </div>
        <div className="products">
          product
        </div>

        <div className="bottomSide">
          <p>Total:$ 75.00</p>
          <div className="buttons">
            <button>VIEW CART</button>
            <button>CHECK OUT</button>

          </div>
        </div>

        

      </div>
      
    </div>
    </>

  )
}

export default BasketSlider