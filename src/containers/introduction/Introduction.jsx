import React from "react";
import "./introduction.scss";

const Introduction = () => {
    return (
        <section
            className="feature section__padding"
            style={{ backgroundImage: "url(img/introduction-bg.png)" }}
        >
            <div className="feature__content">
                <h1 className="feature__title ">what happened!</h1>
                <p className="feature__lead">
                    How to create mobile-optimized videos in minutes. Not a
                    designer, every team makes a lot of videos Can be trimmed.
                    Take the first step to your brand's success. How to create
                    mobile-optimized videos in minutes.
                </p>
            </div>
        </section>
    );
};

export default Introduction;
