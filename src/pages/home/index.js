import React from "react";
import s from "./home.module.scss";
import LinkButton from "../../components/Button/LinkButton";
import MouseIcon from "../../components/MouseIcon";
import Title from "../../components/Title";
import Overlay from "../../components/Overlay";
import {PRASHANT_RESUME} from "../../constants/cdnImagePath";
import Typer from "../../components/Typer";

const Home = () => {
    return (
        <>
            <section id="HOME" className={`${s.homeBanner}`}>
                <Overlay/>
                <Title
                    label={"HOME"}
                    isAdjust={true}
                />
                <div className="container">
                    <div className={`row align-items-center min-vh-100`}>
                        <div className="col col-md-12 col-lg-8 col-xl-6">
                            <div className={`${s.homeTextCenter}`}>
                                <Typer
                                    heading="I'm"
                                    dataText={[
                                        "Prashant Dawkhar",
                                        "a Web Developer",
                                    ]}
                                />
                                <p>Goal-oriented Web Developer with a strong commitment to collaboration and
                                    solutions-oriented problem-solving. Use various web design software to develop
                                    customer-focused websites and designs. Committed to high standards of web design,
                                    user experience, usability and speed for multiple types of end-users. Successful at
                                    maintaining customer satisfaction through effective customer support.</p>
                                <div className="btn-bar">
                                    <LinkButton target={"_blank"} url={PRASHANT_RESUME} label={"Download CV"} download={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MouseIcon link={"ABOUT_US"}/>
            </section>
        </>
    )
}

export default Home;