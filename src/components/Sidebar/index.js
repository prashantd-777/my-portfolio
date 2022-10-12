import s from "./Sidebar.module.scss";
import {NAVBAR_LIST} from "../../constants/navbar";
import {useEffect, useRef} from "react";

const Sidebar = ({
                     isMenuOpen = false,
                     handleToggleMenu,
                 }) => {

    const boxRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (boxRef.current && !boxRef.current.contains(event.target) && isMenuOpen) {
                handleToggleMenu();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen])

    return (
        <div className={`${s.sideMenuContainer} ${isMenuOpen === true ? ` ${s.active}` : ""}`} ref={boxRef}>
            <div className="overlay"></div>
            <div className={`inner-wrapper ${s.innerWrapper}`}>
                <span className={`btn-close ${s.btnClose}`} onClick={handleToggleMenu}><i></i><i></i></span>
                <nav className={`d-block mb-5 w-100 ${s.sideNav}`}>
                    <ul className={`${s.navbarNav}`}>
                        {NAVBAR_LIST.map(item => {
                            return (
                                <li key={item.id} className={s.navItem}>
                                    <a className="nav-link" href={item.href}>
                                        {item.name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;