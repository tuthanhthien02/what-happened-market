import React from "react";
import { Product, ButtonSeeMore } from "../../components";
import "./product-list.scss";

const ProductList = () => {
    return (
        <section className="product-list section__padding">
            <div className="product-list__container">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <div className="product-list__cta">
                <ButtonSeeMore />
            </div>
        </section>
    );
};

export default ProductList;
