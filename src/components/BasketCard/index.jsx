import React from 'react'
import "./index.scss";

function BasketCard({url,name,count,price}) {
  return (
    <div className='basketCard_Container'>
        <div className="basketCard">
            <div className="image">
                <img src={url}alt="" />
                <div className="hiddenHoverX">
                <i class="fa-solid fa-xmark"></i>

                </div>
            </div>
            <div className="text">
                <p className='name'>{name}</p>
                <p className='price'>{count} x {price}</p>
            </div>
        </div>
        
        
    </div>
  )
}

export default BasketCard