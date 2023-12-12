import React from 'react'
import SliderHeader from '../../components/Slider'
import CategorySection from '../../components/CategorySection'
import BasketSlider from '../../components/BasketSlider'
import ProductsSection from '../../components/ProductsSection'
function HomePage() {
  return (
    <div>
        <SliderHeader/>
        <CategorySection/>
        <BasketSlider/>
        <ProductsSection/>
    </div>
  )
}

export default HomePage