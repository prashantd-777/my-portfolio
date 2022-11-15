import s from "./SectionTitle.module.scss";

const SectionTitle = ({
    label = ""
                      }) => {
    return (
        <div className={`${s.sectionTitle} text-center`}>
            <h2>{label}</h2>
        </div>
    )
}

export default SectionTitle;