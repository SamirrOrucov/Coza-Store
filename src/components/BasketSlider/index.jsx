import React, { useState } from 'react'
import "./index.scss"
function BasketSlider() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <div className="opacityDiv"></div>
        <div id='basketSlider' className={isOpen?`translate`:''}>
      <div className="basketSlider_container">
        <div className="topSide">
        <h3>Your Cart</h3>
        <i class="fa-solid fa-xmark" onClick={()=>setIsOpen(!isOpen)}></i>
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