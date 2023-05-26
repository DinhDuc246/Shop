import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'
const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://img6.thuthuatphanmem.vn/uploads/2022/01/27/hinh-gai-xinh-mac-vay-ngan-che-mat-dep_022807723.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://haycafe.vn/wp-content/uploads/2022/03/Hinh-anh-gai-xinh-toc-ngan-che-mat-khoe-eo-thon-dep-goi-cam.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Women</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://luv.vn/wp-content/uploads/2022/06/gai-xinh-mac-vay-trang-24.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">NewSeason</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.kienthuc.net.vn/Uploaded/trucchinh2/2020_09_22/2-1597203879-556-width600height743_PAQU.jpg" alt="" />
                            <button>
                                <Link className="link" to="/products/1">Men</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://gaixinhbikini.com/wp-content/uploads/2023/03/gai-mac-vay-sexy-24.jpg" alt="" />
                            <button>
                                <Link className="link" to="/products/1">Accessories</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://advertisingvietnam.com/wp-content/uploads/2019/07/7sat-19.07-14.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Shoes</Link>
                    </button>
                </div>
            </div>

        </div>


    )
}

export default Categories