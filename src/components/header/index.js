import React from "react";
import styles from "./header.module.scss"
import Hamburger from "../Hamburger";

const Header = ({
                    handleToggleMenu
                }) => {
    return (
        <header>
            <nav className={`navbar fixed-top ${styles.headerNav} navbar-expand-lg`}>
                <div className="container">
                    {/*Brand*/}
                    <a className={`${styles.navbarBrand} navbar-brand`} href="/">
                        Prashant
                        <span className="theme-bg"></span>
                    </a>

                    <Hamburger
                        handleToggleMenu={handleToggleMenu}
                    />
                </div>
            </nav>
        </header>
    )
}

export default Header;