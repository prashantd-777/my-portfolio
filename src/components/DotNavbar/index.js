import s from "./DotNavbar.module.scss";
import {NAVBAR_LIST} from "../../constants/navbar";

const DotNavbar = ({
                       activeTab = "",
                       handleDotClick
                   }) => {
    return (
        <div className={`${s.mainContainer}`}>
            <ul>
                {NAVBAR_LIST.map(item => {
                    return (
                        <li
                            key={item?.id}
                            className={`${activeTab === item?.id ? s.active : ""}`}
                        >
                            <a
                                href={`#${item?.id}`}
                                data-target={item?.id}
                                onClick={() => handleDotClick(item?.id)}
                            >
                                <span/>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DotNavbar;