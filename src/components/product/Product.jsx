import React from "react";
import { AiFillHeart } from "react-icons/ai";

import "./product.scss";

const Product = () => {
    return (
        <div className="product">
            <a className="product__img">
                <img src="img/img-01.png" alt="" />
            </a>
            <div className="product__info">
                <a className="product__title">[what happen] How to create</a>
                <div className="product__stats">
                    <span className="product__price">2,500 won</span>
                    <span className="product__likes">
                        <AiFillHeart /> 236
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Product;
