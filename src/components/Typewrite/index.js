import React from "react";
import s from "./Typewrite.module.scss";

const Typewrite = () => {
    return (
        <h1>
            <a href="" className={`typewrite ${s.typewrite}`} data-period="2000"
               data-id={`[ "Hi, I am Prashant Dawkhar", "I am a Web Developer" ]`}>
                <span className={`wrap`}></span>
            </a>
        </h1>
    )
}

export default Typewrite;