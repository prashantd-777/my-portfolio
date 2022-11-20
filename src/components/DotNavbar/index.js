import s from "./DotNavbar.module.scss";
import {NAVBAR_LIST} from "../../constants/navbar";

const DotNavbar = () => {
    return (
        <div className={`${s.mainContainer} dot-navigation`}>
            <ul>
                {NAVBAR_LIST.map(item => {
                    return (
                        <li
                            key={item?.id}
                            title={item?.name}
                        >
                            <a href={`#${item?.id}`}>
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