import React from "react";
import s from "./PrimaryButton.module.scss";

const PrimaryButton = ({
                           label = "",
                           onClick,
                       }) => {
    return (
        <button className={`${s.mainButton}`} onClick={onClick}>
            {label}
        </button>
    )
}

export default PrimaryButton;