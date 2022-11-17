import s from "./Title.module.scss";

const Title = ({
                   label = "",
                   isAdjust = false
               }) => {
    return (
        <div className={`${s.titleContainer}`}>
            <p className={`${isAdjust ? s.doAdjust : s.defaultAdjust}`}>{label}</p>
        </div>
    )
}

export default Title;