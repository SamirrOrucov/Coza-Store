import React from 'react'
import CartegoryCard from '../CategoryCard'
import "./index.scss"
function CategorySection() {
  return (
    <div className="categorySection_container">
      <div className='totalCategoryContainer'>
      <CartegoryCard img={"https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp"}  categoryName="Women" trend="Spring 2018"/>
      <CartegoryCard img={"https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp"}  categoryName="Men" trend="Spring 2018"/>
      <CartegoryCard img={"https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg.webp"}  categoryName="Accessories" trend="New Trend"/>
    </div>
    </div>
  )
}

export default CategorySection