import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import { BsArrowRight } from "react-icons/bs";
import "./hot-brand-slider.scss";

const HotBrand = ({
    brandName,
    image,
    imageDeco,
    isImageSlide,
    top,
    right,
    bottom,
    left,
}) => {
    return isImageSlide ? (
        <div className="hot-brand-slider__item">
            <div className="hot-brand-slider__item-heading">
                <h1 className="hot-brand-slider__item-title">{brandName}</h1>
            </div>
            <div className="hot-brand-slider__item-content">
                <div className="hot-brand-slider__item-image">
                    <img src={image} alt="" />
                </div>
            </div>
            <div
                className="hot-brand-slider__bg"
                style={{ top, right, bottom, left }}
            >
                <img src={imageDeco} alt="" />
            </div>
        </div>
    ) : (
        <div className="hot-brand-slider__item hot-brand-slider__item-see-more">
            <div className="hot-brand-slider__item-heading">
                <h1 className="hot-brand-slider__item-title">&nbsp;</h1>
            </div>
            <div className="hot-brand-slider__item-content">
                <div className="hot-brand-slider__item-image">
                    <img src="img/news-img-03.png" alt="" />
                </div>
                <div className="hot-brand-slider__item-content-overlay">
                    <h1 className="hot-brand-slider__item-content-overlay__title">
                        WHPN issue
                    </h1>
                    <button className="hot-brand-slider__item-content-overlay__cta">
                        <BsArrowRight />
                    </button>
                </div>
            </div>
            <div
                className="hot-brand-slider__bg"
                style={{ top, right, bottom, left }}
            >
                <img src={imageDeco} alt="" />
            </div>
        </div>
    );
};

const HotBrandSlider = () => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1550px)" });

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    const imageDecoList = [
        {
            imageDeco: "img/news-object-03.png",
            right: "-10%",
            bottom: "-19%",
        },
        {
            imageDeco: "img/news-object-04.png",
            top: "-7%",
            left: "7%",
        },
        {
            imageDeco: "img/news-object-05.png",
            right: "-6%",
            bottom: "-10%",
        },
    ];

    return (
        <div className="hot-brand-slider">
            <div className="hot-brand-slider__container">
                {isTabletOrMobile && (
                    <Slider {...settings}>
                        <HotBrand
                            brandName="brand b"
                            image="null"
                            imageDeco={imageDecoList[0].imageDeco}
                            isImageSlide={false}
                            right={imageDecoList[0].right}
                            bottom={imageDecoList[0].bottom}
                        />
                        <HotBrand
                            brandName="b brand"
                            imageDeco={imageDecoList[1].imageDeco}
                            image="img/news-img-05.png"
                            isImageSlide={true}
                            top={imageDecoList[1].top}
                            left={imageDecoList[1].left}
                        />
                        <HotBrand
                            brandName="c brand"
                            image="img/news-img-03.png"
                            isImageSlide={true}
                        />
                        <HotBrand
                            brandName="d brand"
                            imageDeco={imageDecoList[2].imageDeco}
                            image="img/news-img-04.png"
                            isImageSlide={true}
                            right={imageDecoList[2].right}
                            bottom={imageDecoList[2].bottom}
                        />
                        <HotBrand
                            brandName="e brand"
                            image="img/news-img-05.png"
                            isImageSlide={true}
                        />
                    </Slider>
                )}

                {!isTabletOrMobile && (
                    <>
                        <HotBrand
                            brandName="brand b"
                            image="null"
                            imageDeco={imageDecoList[0].imageDeco}
                            isImageSlide={false}
                            right={imageDecoList[0].right}
                            bottom={imageDecoList[0].bottom}
                        />
                        <HotBrand
                            brandName="b brand"
                            imageDeco={imageDecoList[1].imageDeco}
                            image="img/news-img-05.png"
                            isImageSlide={true}
                            top={imageDecoList[1].top}
                            left={imageDecoList[1].left}
                        />
                        <HotBrand
                            brandName="c brand"
                            image="img/news-img-03.png"
                            isImageSlide={true}
                        />
                        <HotBrand
                            brandName="d brand"
                            imageDeco={imageDecoList[2].imageDeco}
                            image="img/news-img-04.png"
                            isImageSlide={true}
                            right={imageDecoList[2].right}
                            bottom={imageDecoList[2].bottom}
                        />
                        <HotBrand
                            brandName="e brand"
                            image="img/news-img-05.png"
                            isImageSlide={true}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default HotBrandSlider;
