import React from "react";
import { BestProduct } from "../../components";
import "./best-products.scss";

const BestProducts = () => {
    return (
        <div
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
                <BestProduct />
                <BestProduct />
                <BestProduct />
            </div>
        </div>
    );
};

export default BestProducts;
