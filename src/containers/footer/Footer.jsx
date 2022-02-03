import React from "react";
import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__info">
                    <div className="footer__info-left">
                        <div className="footer__info-item">
                            <h1 className="footer__info-title">
                                what happened
                            </h1>
                            <a className="footer__info-lead">
                                [공지] 개인 정보 처리 방침 변경 사전 안내x
                            </a>
                            <a className="footer__info-lead">
                                [공지] 29CM 강남 스토어 영업 종료
                            </a>
                            <a className="footer__info-lead">
                                [공지] 개인 정보 처리 방침 변경 사전 안내
                            </a>
                            <a className="footer__info-lead">
                                a [공지] iOS 10 이하 버전 지원 중단 안내
                            </a>
                            <a className="footer__info-lead">
                                [공지] 개인 정보 처리 방침 변경 사전 안내
                            </a>
                        </div>
                    </div>

                    <div className="footer__info-right">
                        <div className="footer__info-item">
                            <h1 className="footer__info-title">about us</h1>
                            <a className="footer__info-lead">회사 소개</a>
                            <a className="footer__info-lead">인재 채용</a>
                            <a className="footer__info-lead">상시 할인 혜택</a>
                        </div>

                        <div className="footer__info-item">
                            <h1 className="footer__info-title">my order</h1>
                            <a className="footer__info-lead"> 내 주문</a>
                            <a className="footer__info-lead">주문 배송</a>
                            <a className="footer__info-lead">
                                취소 / 교환 / 반품 내역
                            </a>
                            <a className="footer__info-lead">상품 리뷰 내역</a>
                            <a className="footer__info-lead">증빙 서류 발급</a>
                        </div>

                        <div className="footer__info-item">
                            <h1 className="footer__info-title">my account</h1>
                            <a className="footer__info-lead"> 회원 정보 수정</a>
                            <a className="footer__info-lead">회원 등급</a>
                            <a className="footer__info-lead">마일리지 현황</a>
                            <a className="footer__info-lead">쿠폰</a>
                        </div>

                        <div className="footer__info-item">
                            <h1 className="footer__info-title">help</h1>
                            <a className="footer__info-lead">
                                {" "}
                                1 : 1 상담 내역
                            </a>
                            <a className="footer__info-lead">상품 Q & A 내역</a>
                            <a className="footer__info-lead">공지 사항</a>
                            <a className="footer__info-lead">자주하는 질문</a>
                            <a className="footer__info-lead">고객의 소리</a>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <div className="footer__copyright-text">
                        <p>
                            © 2020-2021 what happened corp l (주) 왓헤픈 ｜
                            대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ
                            test0101@what happened.co.kr
                        </p>
                        <p>
                            서울특별시 강남구 도산대로 8길 17 ｜ FAX :
                            070-0000-0000 l 서비스 이용약관 l 개인정보처리방침
                        </p>
                    </div>
                    <div className="footer__copyright-sns">
                        <div className="footer__copyright-image">
                            <img src="img/snsicon-01.png" alt="" />
                        </div>
                        <div className="footer__copyright-image">
                            <img src="img/snsicon-02.png" alt="" />
                        </div>
                        <div className="footer__copyright-image">
                            <img src="img/snsicon-03.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
