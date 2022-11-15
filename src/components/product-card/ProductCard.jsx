
import React from 'react'
import './product-card.scss'

const ProductCard = (props) => {

    const { title, imgUrl, price} = props.item

  return (
    <div className='single__product'>
        <div className="product__images">
            <img src={imgUrl} alt="" />
        </div>

        <div className='product__content'>
            <div className="rating">
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
            </div>

            <h6>{title}</h6>

            <div className='icon'>
                <span className='price'>
                    {" "}
                    Price: $<span>{price}</span>
                </span>
                <span className='shopping__icon'><i class="ri-shopping-cart-line"></i></span>
            </div>
        </div>
    </div>
  )
}

export default ProductCard