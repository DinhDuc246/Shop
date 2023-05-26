import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {

    const [selectedImg, setSelectedImg] = useState(0);
    const [quanlity, setQuanlity] = useState(1);

    const images = [
        "https://img6.thuthuatphanmem.vn/uploads/2022/01/27/hinh-gai-xinh-mac-vay-ngan-che-mat-dep_022807723.jpg",
        "https://i.vietgiaitri.com/2020/4/24/hot-girl-instagram-viet-19-tuoi-chi-mac-goi-cam-khi-chup-hinh-af9-4876590.jpg",
    ];
    return (
        <div className='product'>
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
                    <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className='price'>$199</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quaerat, non, distinctio asperiores repudiandae quia,
                    tenetur numquam in unde placeat laudantium vitae perferendis ad sequi incidunt possimus nam praesentium voluptatem.</p>
                <div className='quanlity'>
                    <button onClick={() => setQuanlity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                    {quanlity}
                    <button onClick={() => setQuanlity(prev => prev + 1)}>+</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon />
                    Add to cart
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon />Add To Wish List
                    </div>
                    <div className="item">
                        <BalanceIcon /> Add To Compare
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Mona</span>
                    <span>Product Type: Body Hugging Dress </span>
                    <span>Tag: Dress, Women, Top</span>
                </div>
                <hr />
                <div className="details">
                    <span>Description</span>
                    <hr />
                    <span>Additional Information</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    );
};

export default Product