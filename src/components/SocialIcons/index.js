import s from "./SocialIcons.module.scss";

const SocialIcons = ({
    icon = null,
    link = ""
                     }) => {
    return (
        <a className={`${s.mainContainer}`} href={link} target="_blank">
            {icon}
        </a>
    )
}

export default SocialIcons;