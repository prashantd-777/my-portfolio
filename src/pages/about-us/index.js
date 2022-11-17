import React from "react";
import s from "./about-us.module.scss";
import PrimaryButton from "../../components/Button/PrimaryButton";
import Title from "../../components/Title";
import Overlay from "../../components/Overlay";
import {SKILLS_LIST} from "../../constants/skills";
import ProgressBar from "../../components/ProgressBar";

const AboutUs = () => {
    return (
        <section id={"ABOUT_US"} className={`${s.aboutContainer}`}>
            <Overlay />
            <Title label={"ABOUT ME"} />

            <div className="container">
                <div className="row align-items-center py-5 min-vh-100">
                    <div className="col-md-6">
                        <div className={`${s.aboutLeft}`}>
                            <h2>Hello, I'm Prashant Dawkhar</h2>
                            <h3>I'm a frontend developer based in Pune, India</h3>
                            <p>I design and develop services for customers of specializing in creating
                                stylish, modern websites, web services and online stores.</p>
                            <a href={`#CONTACT_US`} data-scroll="smooth">
                                <PrimaryButton label={"Contact US"} />
                            </a>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div>
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

export default AboutUs;