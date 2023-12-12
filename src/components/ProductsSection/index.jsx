import React, { useContext, useState } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { SearchFilterContext } from "../../context/SearchFilterContext";
import ProductCards from "../ProductCards";
function ProductsSection() {
  const { showFilter, showSearch, showContentFilter, showContentShow,setImpTargetValue } =
    useContext(SearchFilterContext);
  return (
    <div id="productsSection">
      <div className="productsContainer">
        <h2>PRODUCT OVERVIEW</h2>
        <div className="filterSection">
          <div className="categories">
            <ul>
              <NavLink>All Products</NavLink>
              <NavLink>Women</NavLink>
              <NavLink>Men</NavLink>
              <NavLink>Bag</NavLink>
              <NavLink>Shoes</NavLink>
              <NavLink>Watches</NavLink>
            </ul>
          </div>
          <div className="filterAndSearch">
            <div className="filter_container">
              <button onClick={showContentFilter}>
                <i class="fa-solid fa-filter"></i>Filter
              </button>
            </div>
            <div className="search_container">
              <button onClick={showContentShow}>
                <i class="fa-solid fa-magnifying-glass"></i>Search
              </button>
            </div>
          </div>
        </div>
        <div className={showFilter ? "showFilter" : "hiddenFilterCover"}>
          <div className="hiddenFilterBoard">
            <div className="filterParam_SortBy">
              <div className="title">Sort By</div>
              <ul>
                <li>Default</li>
                <li>Popularity</li>
                <li>Average rating</li>
                <li>Newness</li>
                <li>Price:Low to High</li>
                <li>Price:High to Low</li>
              </ul>
            </div>
            <div className="filterParam_Price">
              <div className="title">Price</div>
              <ul>
                <li>All</li>
                <li>$0.00-$50.00</li>
                <li>$50.00-$100.00</li>
                <li>$100.00-$150.00</li>
                <li>$150.00-$200.00</li>
                <li>$200.00+</li>
              </ul>
            </div>
            <div className="filterParam_Color">
              <div className="title">Color</div>
              <ul>
                <li>
                  <div
                    className="color "
                    style={{ backgroundColor: "black" }}
                  ></div>
                  Black
                </li>
                <li>
                  <div
                    className="color"
                    style={{ backgroundColor: "blue" }}
                  ></div>
                  Blue
                </li>
                <li>
                  <div
                    className="color"
                    style={{ backgroundColor: "grey" }}
                  ></div>
                  Grey
                </li>
                <li>
                  <div
                    className="color"
                    style={{ backgroundColor: "green" }}
                  ></div>
                  Green
                </li>
                <li>
                  <div
                    className="color"
                    style={{ backgroundColor: "red" }}
                  ></div>
                  Red
                </li>
                <li>
                  <div
                    className="color"
                    style={{ backgroundColor: "white" }}
                  ></div>
                  White
                </li>
              </ul>
            </div>
            <div className="filterParam_Tags">
              <div className="title">Tags</div>
              <button>Fashion</button>
              <button>Lifestyle</button>
              <button>Denim</button>
              <button>Streetstyle</button>
              <button>Crafts</button>
            </div>
          </div>
        </div>
        <div className={showSearch ? " showSearch" : "hiddenSearchCover"}>
          <div className="hiddenSearchBoard">
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input type="text" name="" id="" placeholder="Search " onChange={e=>setImpTargetValue(e.target.value)} />
          </div>
        </div>

        <div className="productCardsSection">
          <ProductCards />
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;
