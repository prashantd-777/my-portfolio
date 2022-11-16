import s from "./work.module.scss";
import SectionTitle from "../../components/SectionTitle";

const Work = () => {
    return (
        <section id={"WORK"} className={`${s.workContainer}`}>
            <div className={"container"}>
                <div className="row py-5 min-vh-100">
                    <div className={`col-12`}>
                        <SectionTitle label={"HOW I WORK"}/>
                    </div>
                    <div className={"col-md-12"}>
                        <div className={`${s.workItem}`}>
                            <p className={`${s.workTitle}`}>
                                Discuss & Plan
                            </p>
                            <p>
                                Discuss with peers to find out the execution plan and timeline.
                            </p>
                        </div>
                        <div className={`${s.workArrow}`}></div>
                        <div className={`${s.workItem}`}>
                            <p className={`${s.workTitle}`}>
                                Design & Develop
                            </p>
                            <p>
                                Do as much research in this phase to determine the resource and the stack requirements for the flow of the project.
                            </p>
                        </div>
                        <div className={`${s.workArrow}`}></div>
                        <div className={`${s.workItem}`}>
                            <p className={`${s.workTitle}`}>
                                Final Approach
                            </p>
                            <p>
                                Its the time to start the execution of the plans step-by-step.                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;