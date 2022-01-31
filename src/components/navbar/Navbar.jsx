import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.scss";
import logo from "../../logo.svg";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="navbar">
            <a href="" className="navbar__logo">
                <img src={logo} alt="" />
            </a>
            <ul className="navbar__links-container">
                <li className="navbar__nav-link">
                    <a href="">introduce</a>
                </li>
                <li className="navbar__nav-link">
                    <a href="">solution</a>
                </li>
                <li className="navbar__nav-link">
                    <a href="">rate plan</a>
                </li>
                <li className="navbar__nav-link navbar__nav-link--border-left">
                    <a href="">login</a>
                </li>
                <li className="navbar__nav-link">
                    <a href="">apply for free use</a>
                </li>
            </ul>
            <div className="navbar__menu">
                {toggleMenu ? (
                    <button className="navbar__menu-button">
                        <RiCloseLine
                            color="#fff"
                            size={30}
                            onClick={() => setToggleMenu(false)}
                        />
                    </button>
                ) : (
                    <button className="navbar__menu-button">
                        <RiMenu3Line
                            color="#fff"
                            size={30}
                            onClick={() => setToggleMenu(true)}
                        />
                    </button>
                )}
                <div
                    className={
                        toggleMenu
                            ? "navbar__menu-container navbar__menu-container--slide-down"
                            : "navbar__menu-container"
                    }
                >
                    <ul className="navbar__menu-container-links">
                        <li className="navbar__menu-link">
                            <a href="">introduce</a>
                        </li>
                        <li className="navbar__menu-link">
                            <a href="">solution</a>
                        </li>
                        <li className="navbar__menu-link">
                            <a href="">rate plan</a>
                        </li>
                        <li className="navbar__menu-link">
                            <a href="">login</a>
                        </li>
                        <li className="navbar__menu-link">
                            <a href="">app for free use</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
