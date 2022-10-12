import React from "react";

const PrimaryButton = ({
                           label = "",
                           onClick,
                           showIcon = false

                       }) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    )
}

export default PrimaryButton;