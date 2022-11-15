import React from "react";
import s from "./ProgressBar.module.scss";

const ProgressBar = ({
                         label = "",
                         value = 0
                     }) => {
    return (
        <div className={`${s.progressLT}`}>
            <h6>{label}</h6>
            <span>{value}%</span>
            <div className={`progress ${s.progress}`}>
                <div className={`${s.progressBar}`} role="progressbar" aria-valuenow={value} aria-valuemin="0"
                     aria-valuemax="100" style={{
                    width: `${value}%`
                }}>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;