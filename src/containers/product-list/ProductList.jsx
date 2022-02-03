import React from "react";
import { Product, ButtonSeeMore } from "../../components";
import "./product-list.scss";

const ProductList = () => {
    return (
        <section className="product-list section__padding">
            <div className="product-list__container">
                <Product img="img/img-01.png" />
                <Product img="img/img-02.png" />
                <Product img="img/img-03.png" />
                <Product img="img/img-04.png" />
                <Product img="img/img-05.png" />
                <Product img="img/img-06.png" />
                <Product img="img/img-07.png" />
                <Product img="img/img-08.png" />
                <Product img="img/img-09.png" />
                <Product img="img/img-10.png" />
                <Product img="img/img-11.png" />
                <Product img="img/img-12.png" />
                <Product img="img/img-13.png" />
                <Product img="img/img-14.png" />
                <Product img="img/img-15.png" />
                <Product img="img/img-16.png" />
                <Product img="img/img-17.png" />
                <Product img="img/img-18.png" />
                <Product img="img/img-19.png" />
                <Product img="img/img-20.png" />
                <Product img="img/img-21.png" />
                <Product img="img/img-22.png" />
                <Product img="img/img-23.png" />
                <Product img="img/img-24.png" />
                <Product img="img/img-25.png" />
            </div>
            <div className="product-list__cta">
                <ButtonSeeMore />
            </div>
        </section>
    );
};

export default ProductList;
