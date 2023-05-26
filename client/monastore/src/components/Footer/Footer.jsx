import React from 'react'
import "./Footer.scss"
function Footer() {
    return (
        <div className='footer'>
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Link</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum sit dicta nam nulla accusamus dolores,
                        iure officia vel, molestiae repudiandae veritatis dolorum atque! Tempore est nulla quisquam accusantium,
                        minima quae.</span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veniam quis porro eligendi repellat dolores,
                        qui impedit consequuntur error, optio nam placeat temporibus natus et quos reprehenderit illum corrupti molestiae.</span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className='logo'>MonaStore</span>
                    <span className='copyright'>
                        © Copyright 2023. All Right Reserved
                    </span>
                </div>
                <div className="right">
                    <img src="https://raw.githubusercontent.com/safak/youtube2022/ecommerce/client/public/img/payment.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer