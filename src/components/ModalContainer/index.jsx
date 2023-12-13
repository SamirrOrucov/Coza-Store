import React, { useEffect, useState } from "react";
import "./index.scss";

function ModalContainer({ id, closeModal }) {
  const [dataModal, setDataModal] = useState([]);
  useEffect(() => {
    getfetch();
  }, []);

  async function getfetch() {
    const res = await fetch(
      "https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products/" +
        id
    );
    const data = await res.json();
    setDataModal(data);
  }
  return (
    <div>
      <div className="modal_container"> 
      <i className="fa-solid fa-xmark" onClick={closeModal}></i>

        <div className="carusel">{console.log(dataModal)}</div>
        <div className="content">
          <div className="content_text">
            <p className="name">{dataModal.name}</p>
            <p className="price">{dataModal.price}</p>
            <p className="desc">{dataModal.description?.text}</p>
          </div>
          <div className="configurations">
            <div className="selectSize">
              <span>Size</span>
              <select name="" id="">
                <option value="">Choose an option</option>
                <option value="">Size S</option>
                <option value="">Size M</option>
                <option value="">Size L</option>
                <option value="">Size XL</option>
              </select>
            </div>
            <div className="selectColor">
              <span>Color</span>
              <select name="" id="">
                <option value="">Choose an option</option>
                <option value="">Red</option>
                <option value="">Blue</option>
                <option value="">White</option>
                <option value="">Grey </option>
              </select>
            </div>
            <div className="counterArea">
              <div className="counter">
                <div className="decrease">-</div>
                <div className="count">5</div>
                <div className="increase">+</div>
              </div>
              <button>ADD TO CART</button>
            </div>
          </div>
          <div className="icons">
            <i class="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalContainer;
