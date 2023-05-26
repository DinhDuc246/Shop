import React from 'react'
import "./Cart.scss"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://toplist.vn/images/800px/red-shop-844787.jpg",
            tittle: "Skirt",
            desc: "Skirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://img6.thuthuatphanmem.vn/uploads/2022/01/27/hinh-gai-xinh-mac-vay-ngan-che-mat-dep_022807723.jpg",
            tittle: "Hat",
            desc: "Hat",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ]
    const showAlert = () => {
        alert("you want to remove the product from the cart?");
    }
    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {data?.map(item => (
                <div className='item' key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.tittle}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className='price'>
                            1 x ${item.price}
                        </div>
                    </div>
                    <button onClick={showAlert}>
                        <DeleteOutlineOutlinedIcon className='delete' />
                    </button>
                </div>
            ))
            }
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>Proced To Checkout</button>
            <span className='reset'>Reset Cart</span>
        </div >
    )
}

export default Cart