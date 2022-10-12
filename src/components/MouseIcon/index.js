import React from "react";
import s from "./MouseIcon.module.scss";

const MouseIcon = ({
                       link = ""
                   }) => {
    return (
        <a href={link} data-scroll="smooth"
           className={`${s.mouseIcon}`}><span className={`${s.wheel}`}></span></a>
    )
}

export default MouseIcon;