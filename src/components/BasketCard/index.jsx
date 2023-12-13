import React from 'react'

function BasketCard({url,name,count,price}) {
  return (
    <div className='basketCard_Container'>
        <div className="basketCard">
            <div className="image">
                <img src={url}alt="" />
            </div>
            <div className="text">
                <p>{name}</p>
                <p>{count} x {price}</p>
            </div>
        </div>
        
        
    </div>
  )
}

export default BasketCard