import React from "react";
import s from "./about-us.module.scss";
import {COMPUTER_BG, PROFILE_IMG} from "../../constants/cdnImagePath";
import LinkButton from "../../components/Button/LinkButton";
import PrimaryButton from "../../components/Button/PrimaryButton";
import Title from "../../components/Title";
import Overlay from "../../components/Overlay";

const AboutUs = () => {
    return (
        <section id={"ABOUT_US"} className={`${s.aboutContainer}`}>
            <Overlay />
            <Title label={"ABOUT ME"} />

            <div className="container">
                <div className="row align-items-center py-5 min-vh-100">
                    <div className="col-md-6">
                        <div className={`${s.aboutLeft}`}>
                            <h2>I'm Prashant Dawkhar</h2>
                            <h3>I'm a frontend developer based in Canada</h3>
                            <p>I design and develop services for customers of all sizes, specializing in creating
                                stylish, modern websites, web services and online stores.</p>
                            <p>My passion is to design digital user experiences through the bold interface and
                                meaningful interactions. Check out my {" "}
                                <LinkButton link={"#"} label={"Portfolio"}/>
                            </p>
                            <a href={`#CONTACT_US`} data-scroll="smooth">
                                <PrimaryButton label={"Contact US"} />
                            </a>
                        </div>
                    </div>

                    <div className="col-md-6 text-center">
                        {/*<img width={350} src={PROFILE_IMG} title="" alt=""/>*/}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;