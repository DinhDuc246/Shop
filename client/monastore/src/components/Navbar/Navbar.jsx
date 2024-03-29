import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'
import './Navbar.scss'
import Cart from "../Cart/Cart"

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="https://raw.githubusercontent.com/safak/youtube2022/ecommerce/client/public/img/en.png" alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1">Woment</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3">Children</Link>
                    </div>

                </div>
                <div className="center">
                    <Link className='link' to="/">MONA STORE</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className='link' to="/products/1">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1">About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon />
                            <span>2</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div >
    )
}

export default Navbar