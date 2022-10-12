import React from "react";
import s from "./loader.module.scss";

const Loader = ({
    isLoading = false,
    className = ""
                }) => {
    return isLoading ? (
        <>
            <div id={"loading"} className={`${className}`}>
                <div className={s.loadCircle}><span className="one"></span></div>
            </div>
        </>
    ) : null
}

export default Loader;