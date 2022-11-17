import s from "./Title.module.scss";

const Title = ({
                   label = "",
    left = 50,
    right = 50
               }) => {
    return (
        <div className={`${s.titleContainer}`}>
            <p>{label}</p>
        </div>
    )
}

export default Title;