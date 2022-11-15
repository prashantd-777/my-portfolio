import s from "./services.module.scss";
import SectionTitle from "../../components/SectionTitle";
import ServiceCard from "../../components/Cards/ServiceCard";
import {SERVICE_LIST} from "../../constants/service";

const Services = () => {
    return (
        <section id={"SERVICES"} className={`${s.serviceContainer}`}>
            <div className="container">
                <div className="row align-items-center py-5 min-vh-100">
                    <div className={`col-12`}>
                        <SectionTitle label={"WHAT I OFFER"} />
                    </div>
                    {SERVICE_LIST.map(item => {
                        return (
                            <ServiceCard
                                key={item?.id}
                                iconClass={item?.iconClass}
                                title={item?.title}
                                desc={item?.desc}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services;