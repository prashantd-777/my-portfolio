import s from "./LabelText.module.scss";

const LabelText = ({
                       iconClass = "",
                       label = "",
                       desc = null
                   }) => {
    return (
        <div className={`${s.mainContainer}`}>
            {iconClass && (
                <i className={`${iconClass}`} aria-hidden="true"></i>
            )}
            <strong>{label}</strong>&nbsp;
            <span>{desc}</span>
        </div>
    )
}

export default LabelText;