import React from "react";
import { ButtonSeeMore } from "../../components";
import "./brand-story.scss";

const BrandStory = () => {
    return (
        <section className="brand-story">
            <div className="brand-story__heading">
                <h1 className="brand-story__title">Brand story</h1>
                <p className="brand-story__lead">
                    모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요.
                    디자이너가 아니더라도, 모든 팀에서 다듬을 수 있습니다.
                    브랜드의 성공을 위한 첫 걸음을 내딛어보세요. 비디오를 단 몇
                    분 만에 제작해보세요.
                </p>
            </div>
            <div className="brand-story__content-container">
                <div className="brand-story__illustration">
                    {/* <img src="img/img@2x.png" alt="" /> */}
                    <img src="img/img.png" alt="" />
                </div>
                <div className="brand-story__content">
                    <h1 className="brand-story__content-title">
                        What Happened’s Brand story
                    </h1>
                    <p className="brand-story__content-lead">
                        청춘이 있는 바이며, 말이다. 같지 노년에게서 어디
                        모래뿐일 무엇을 풀이 옷을 봄바람이다. 새 천고에 놀이
                        내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                        긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도
                        피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
                        칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                        아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.
                    </p>
                    <div className="brand-story__content-cta">
                        <ButtonSeeMore />
                    </div>
                </div>
                <div className="brand-story__content-dark-line"></div>
            </div>

            <div className="brand-story__bg brand-story__bg-01">
                <img src="img/object-01.png" alt="" />
            </div>
            <div className="brand-story__bg brand-story__bg-02">
                <img src="img/object-02.png" alt="" />
            </div>
            <div className="brand-story__bg brand-story__bg-03">
                <img src="img/object-03.png" alt="" />
            </div>
            <div className="brand-story__bg brand-story__bg-04">
                <img src="img/object-04.png" alt="" />
            </div>
            <div className="brand-story__bg brand-story__bg-05">
                <img src="img/object-05.png" alt="" />
            </div>
            <div className="brand-story__bg brand-story__bg-06">
                <img src="img/object-06.png" alt="" />
            </div>
            <div className="brand-story__bg brand-story__bg-07">
                <img src="img/object-07.png" alt="" />
            </div>
        </section>
    );
};

export default BrandStory;
