import React, {forwardRef, useEffect, useRef, useState} from "react";
import styles from "./header.module.scss"
import {NAVBAR_LIST} from "../../constants/navbar";
import Hamburger from "../Hamburger";
import Sidebar from "../Sidebar";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header>
            <nav className={`navbar fixed-top ${styles.headerNav} navbar-expand-lg`}>
                <div className="container">
                    {/*Brand*/}
                    <a className={`${styles.navbarBrand} navbar-brand`} href="/">
                        PD
                        <span className="theme-bg"></span>
                    </a>

                    <Hamburger
                        handleToggleMenu={handleToggleMenu}
                    />

                    <Sidebar
                        isMenuOpen={isMenuOpen}
                        handleToggleMenu={handleToggleMenu}
                    />

                    {/*Top Menu*/}
                    {/*<div className="collapse navbar-collapse justify-content-end" id="navbarTop">*/}
                    {/*    <ul className={`navbar-nav ${styles.navbarNav}`}>*/}
                    {/*        {NAVBAR_LIST.map(item => {*/}
                    {/*            return (*/}
                    {/*                <li key={item?.id} onClick={() => handleNavClick(item?.id)}>*/}
                    {/*                    <a className={`nav-link ${styles.navLink} ${(item?.id === activeID) ? styles.active : ""}`}*/}
                    {/*                       href={item?.href}>{item?.name}</a>*/}
                    {/*                </li>*/}
                    {/*            )*/}
                    {/*        })}*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>
            </nav>
        </header>
    )
}

export default Header;