import s from "./ServiceCard.module.scss";

const ServiceCard = ({
                         iconClass = "",
    title = "",
    desc = ""
                     }) => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className={`${s.featureBox}`}>
                <i className={`${s.icon} ${iconClass}`}></i>
                <div className="feature-content">
                    <h5>{title}</h5>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;