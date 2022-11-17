import React from "react";
import s from "./LinkButton.module.scss";

const LinkButton = ({
                        url = "",
                        label = "",
                        classes = "",
                        target = "",
                        download = false
                    }) => {
    return (
        <a href={url} target={target} className={`${s.btnLink} ${s.btnLinkWhite} ${s.themeAfter} ${classes}`}
           download={download}>
            {label}
        </a>
    )
}

export default LinkButton;