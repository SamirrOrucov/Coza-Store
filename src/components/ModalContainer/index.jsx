import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { Carousel } from "react-carousel-minimal";
import { BasketContext } from "../../context/BasketContext";
// import ModalCarousel from "../ModalCarousel";

function ModalContainer({ id, closeModal }) {
  const [dataModal, setDataModal] = useState([]);
  const {addBasket} = useContext(BasketContext)
  const [data, setData] = useState(null)
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
    setData( data.images.map((x) => {
      console.log(x);
      return { image: x, caption: "" };
    })) 
  }

  return (
    <div>
      <div className="modal_container">
      

        <div className="carusel">
          {data && <Carousel
            data={data}
            time={2000}
            width="600px"
            height="600px"
            radius="10px"
            slideNumber={false}
            captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="50px"
            style={{
              textAlign: "center",
              maxWidth: "350px",
              maxHeight: "300px",
              marginTop: "60px ",
            }}
          />}
        </div>
        <div className="content">
            <div className="closeModal">
        <i className="fa-solid fa-xmark" onClick={closeModal}></i>
        </div>
          <div className="content_text">
            <p className="name">{dataModal.name}</p>
            <p className="price"><strong>${dataModal.price}</strong></p>
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
                <div className="decrease a c">-</div>
                <div className="count a">5</div>
                <div className="increase a c">+</div>
              </div>
              <button onClick={()=>addBasket(dataModal)}>ADD TO CART</button>
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
