import React from 'react'
import "./List.scss"
import Card from '../Card/Card'

const List = () => {
    const data = [

        {
            id: 1,
            img: "https://chancosvn.com/wp-content/uploads/2022/10/Ruby-house.jpg",
            img2: "https://toplist.vn/images/800px/red-shop-844787.jpg",
            tittle: "Dress",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://haycafe.vn/wp-content/uploads/2022/03/anh-gai-xinh-vay-ngan-mau-den.jpg",
            img2: "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/01/hinh-anh-eo-thon-che-mat-dam-xinh.jpg?ssl\u003d1",
            tittle: "Dress",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://anhgaisexy.net/wp-content/uploads/2022/12/gai-xinh-mac-vay-ngan-cute.jpg",
            img2: "https://haycafe.vn/wp-content/uploads/2022/03/anh-gai-xinh-vay-xep-ly-ngan-mau-trang-ao-den.jpg",
            tittle: "Dress",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://img6.thuthuatphanmem.vn/uploads/2022/01/27/anh-gai-xinh-mac-vay-ngan-che-mat-khoe-body_022802147.jpg",
            img2: "https://gaixinhbikini.com/wp-content/uploads/2022/08/anh-chup-truoc-guong-che-mat-nu-12.jpg",
            tittle: "Dress",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ];

    return (
        <div className='list'>
            {data?.map(item => (
                < Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List