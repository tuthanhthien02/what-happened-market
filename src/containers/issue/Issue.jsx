import React from "react";
import { ButtonSeeMore, HotBrandSlider } from "../../components";
import "./issue.scss";

const Issue = () => {
    return (
        <section className="issue">
            <div className="issue__content">
                <h1 className="issue__title">Happened’s issue</h1>
                <p className="issue__lead">
                    모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요.
                    디자이너가 아니더라도, 모든 팀에서 다듬을 수 있습니다.
                    브랜드의 성공을 위한 첫 걸음을 내딛어보세요. 비디오를 단 몇
                    분 만에 제작해보세요.
                </p>
                <div className="issue__cta">
                    <ButtonSeeMore />
                </div>
            </div>
            <HotBrandSlider />
        </section>
    );
};

export default Issue;
