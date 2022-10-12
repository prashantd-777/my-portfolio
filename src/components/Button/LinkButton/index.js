import React from "react";
import s from "./LinkButton.module.scss";

const LinkButton = ({
                        url = "",
                        label = "",
                        classes = ""
                    }) => {
    return (
        <a href={url} className={`${s.btnLink} ${s.btnLinkWhite} ${s.themeAfter} ${classes}`}>
            {label}
        </a>
    )
}

export default LinkButton;