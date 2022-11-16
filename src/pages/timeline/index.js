import s from "./timeline.module.scss";
import SectionTitle from "../../components/SectionTitle";
import {EDUCATION_DATA} from "../../constants/education";

const Timeline = () => {
    return (
        <section id={"TIMELINE"} className={`${s.timelineContainer}`}>
            <div className="container">
                <div className="row py-5 min-vh-100">
                    <div className={`col-12`}>
                        <SectionTitle label={"Short Timeline"}/>
                    </div>

                    {EDUCATION_DATA.map(item => {
                        return (
                            <div key={item?.id} className={"col-md-6"}>
                                <div className={`${s.education}`}>
                                    {(item?.data || []).map(data => {
                                        return (
                                            <div key={data?.id} className={`${s.resumeItem}`}>
                                                <p className={`${s.resYear}`}>
                                                    {data?.duration}
                                                </p>
                                                <p className={`${s.resTitle}`}>
                                                    {data?.title}
                                                </p>
                                                <p className={`${s.resDesc}`}>
                                                    {data?.desc}
                                                </p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Timeline;