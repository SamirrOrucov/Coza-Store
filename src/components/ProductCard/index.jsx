import React, { useContext, useState } from 'react'
import "./index.scss"
import { SearchFilterContext } from '../../context/SearchFilterContext';
import ModalContainer from '../ModalContainer';
function ProductCard({url,name,price,item}) {
  const {  showContentModal } =useContext(SearchFilterContext);
  const [openModalId, setOpenModalId] = useState(null)
  function viewModal(id) {
    setOpenModalId(id)
  }
  function closeModal() {
    setOpenModalId(null)
  }
  return (
    
   <div className="productCard_container">
     <div id='productCard'>
        <div className="image">
            <img src={url} alt="" />
            <div className="quickView" onClick={()=>viewModal(item.id)}>
              <button >Quick View</button>
            </div>
        </div>
        <div className="card_text">
            <p>{name}</p>
            <i className="fa-regular fa-heart"></i>
        </div>
        <div className="price">
            <span>${price}
            </span>
        </div>

        

    </div>
    <div className="modalInProductCards">
       {openModalId !==null? <ModalContainer id={openModalId} closeModal={closeModal} />:null
}
        </div>
   </div>
  )
}

export default ProductCard