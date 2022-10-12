import React from "react";
import s from "./Polygon.module.scss";

const Polygon = () => {
    return (
        <div className={`${s.mainWhiteSVG}`}>
            <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
            </svg>
        </div>
    )
}

export default Polygon