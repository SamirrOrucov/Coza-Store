import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function CartegoryCard({ img, categoryName, trend }) {
  return (
    <div id="cartegoryCard">
      <div
        className="cartegoryCard_container"
        style={{
          backgroundImage: "url(" + img + ")",
          backgroundPosition: "center center",
           backgroundRepeat: " no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="text">
          <h5><strong>{categoryName}</strong></h5>
          <p>{trend}</p>
        </div>
        <div className="hover_box" data-aos="zoom-in">
          <div className="shopButton " data-aos="zoom-in">
            <Link>SHOP NOW</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartegoryCard;
