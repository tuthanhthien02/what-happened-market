import React from "react";
import { ButtonSeeMore } from "../../components";
import "./video.scss";

const Video = () => {
    return (
        <section className="video section__padding">
            <div className="video__heading">
                <h1 className="video__title">What happened</h1>
                <p className="video__lead">
                    How to create mobile-optimized videos in minutes. Not a
                    designer, every team makes a lot of videos Can be trimmed.
                    Take the first{" "}
                </p>
                <div className="video__cta">
                    <ButtonSeeMore />
                </div>
            </div>
            <div className="video__illustration">
                <img src="img/video.png" alt="" />
            </div>
            <div className="video__bg video__bg-01">
                <img src="img/video-object-01.png" alt="" />
            </div>
            <div className="video__bg video__bg-02">
                <img src="img/video-object-02.png" alt="" />
            </div>
            <div className="video__bg video__bg-03">
                <img src="img/video-object-03.png" alt="" />
            </div>
            <div className="video__bg video__bg-04">
                <img src="img/video-object-04.png" alt="" />
            </div>
            <div className="video__bg video__bg-05">
                <img src="img/video-object-05.png" alt="" />
            </div>
            <div className="video__bg video__bg-06">
                <img src="img/video-object-06.png" alt="" />
            </div>
            <div className="video__bg video__bg-07">
                <img src="img/video-object-07.png" alt="" />
            </div>
            <div className="video__bg video__bg-08">
                <img src="img/video-object-08.png" alt="" />
            </div>
            <div className="video__bg video__bg-09">
                <img src="img/video-object-09.png" alt="" />
            </div>
        </section>
    );
};

export default Video;
