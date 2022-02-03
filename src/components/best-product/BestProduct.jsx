import React from "react";
import "./best-product.scss";

const BestProduct = ({ img, imgCount }) => {
    return (
        <div className="best-product">
            <div className="best-product__count">
                <img src={imgCount} alt="" />
            </div>
            <a href="" className="best-product__image">
                <img src={img} alt="" />
            </a>
            <a href="" className="best-product__cta">
                <span className="best-product__cta-text">
                    How to create mobile-optimized
                </span>
                <span className="best-product__cta-icon">
                    <img src="img/go-icon.png" alt="" />
                </span>
            </a>
        </div>
    );
};

export default BestProduct;
