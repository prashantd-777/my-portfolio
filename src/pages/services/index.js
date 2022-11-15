import s from "./services.module.scss";
import PrimaryButton from "../../components/Button/PrimaryButton";
import React from "react";
import ProgressBar from "../../components/ProgressBar";
import {SKILLS_LIST} from "../../constants/skills";

const Services = () => {

    return (
        <section id={"SERVICES"} className={`${s.servicesContainer}`}>
            <div className="container">
                <div className="row align-items-center py-5 min-vh-100">
                    <div className={"col-md-6"}>
                        <div className={`${s.skillLeft}`}>
                            <h3>Make beauty Things With Passion.</h3>
                            <p>
                                I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface.
                            </p>
                            <a href={`#HOME`} data-scroll="smooth">
                                <PrimaryButton label={"Read More"} />
                            </a>
                        </div>
                    </div>

                    <div className={"col-md-6"}>
                        <div className={`${s.skillRight}`}>
                            {SKILLS_LIST.map(item => {
                                return (
                                    <ProgressBar
                                        key={item?.id}
                                        label={item?.label}
                                        value={item?.value}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;