import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import { BasketSliderContext } from "../../context/BasketSliderContext";
function Navbar() {
  const [stickyClass, setStickyClass] = useState("");
  const {isOpen,handleClick}=useContext(BasketSliderContext)

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 205 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };
  return (
    <div id="" className={`container ${stickyClass}`}>
      <div className={`navbar_container`}>
        <div className="links">
          <div className="logo">
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png.webp"
              alt=""
            />
          </div>{" "}
          <ul>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/shop"}>Shop</NavLink>
            <NavLink className="hotA" to={"/features"}>
              Features{" "}
              <div className="hot">
                <span>HOT</span>
              </div>
            </NavLink>
            <NavLink to={"/blog"}>Blog</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </ul>
        </div>
        <div className="icons">
          <i class="fa-solid fa-magnifying-glass"> </i>
            <i onClick={handleClick} class="fa-solid fa-cart-shopping">
                <sup>2</sup>
            </i>
          <i class="fa-regular fa-heart">
              <sup>0</sup>
          </i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
