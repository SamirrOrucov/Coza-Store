import React from 'react'
import './index.scss'

function Footer() {
  return (
    <div className='footer_container'>
      <div className='footer'>
        <div className="footer_upside">
          <div className="categories">
            <ul>
              <li className='head'><strong>CATEGORIES</strong></li>
              <li>Women </li>
              <li>Men</li>
              <li>Shoes</li>
              <li>Watches</li>
            </ul>
          </div>
          <div className="help">
            <ul>
              <li className='head'><strong>HELP</strong></li>
              <li>Track Order</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>FAQs</li>
            </ul>
           
          </div>
          <div className="getInTouch">
          <p className='head'><strong>GET IN TOUCH</strong>
          </p>

            <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
            <div className="icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-pinterest-p"></i>
            </div>
          </div>
          <div className="newsLetter">
          <p className='head'><strong>NEWSLETTER</strong></p>
          <input type="text" name="" id="" placeholder='email@example.com'/>
          <button><strong>SUBSCRIBE</strong></button>



          </div>
        </div>
        <div className="footer_bankCard">
          <div className="footer_bankCard_img">
            <img src="https://themewagon.github.io/cozastore/images/icons/icon-pay-01.png" alt="" />
            <img src="https://themewagon.github.io/cozastore/images/icons/icon-pay-02.png" alt="" />
            <img src="https://themewagon.github.io/cozastore/images/icons/icon-pay-03.png" alt="" />
            <img src="https://themewagon.github.io/cozastore/images/icons/icon-pay-04.png" alt="" />
            <img src="https://themewagon.github.io/cozastore/images/icons/icon-pay-05.png" alt="" />
          </div>
          <p>Copyright ©2023 All rights reserved | This template is made with   by Colorlib</p>
        </div>

      </div>

    </div>
  )
}

export default Footer