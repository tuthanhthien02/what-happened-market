import React from "react";
import { BestProduct } from "../../components";
import "./best-products.scss";

const BestProducts = () => {
    return (
        <section
            className="best-products section__padding"
            style={{ backgroundImage: "url(img/bes-bg.png)" }}
        >
            <div className="best-products__content">
                <h1 className="best-products__title">best product</h1>
                <p className="best-products__lead">
                    How to create mobile-optimized videos in minutes. Not a
                    designer, every team makes a lot of videos Can be trimmed.
                    Take the first{" "}
                </p>
            </div>
            <div className="best-products__list">
                <BestProduct
                    img="img/best-image-01.png"
                    imgCount="img/producticon-01.png"
                />
                <BestProduct
                    img="img/best-image-02.png"
                    imgCount="img/producticon-02.png"
                />
                <BestProduct
                    img="img/best-image-03.png"
                    imgCount="img/producticon-03.png"
                />
            </div>
        </section>
    );
};

export default BestProducts;
