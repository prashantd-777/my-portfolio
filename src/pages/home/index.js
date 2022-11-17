import React from "react";
import s from "./home.module.scss";
import LinkButton from "../../components/Button/LinkButton";
import MouseIcon from "../../components/MouseIcon";
import Title from "../../components/Title";

const Home = () => {
    return (
        <>
            <section id="HOME" className={`${s.homeBanner}`}>
                <Title label={"HOME"} />
                <div className="container">
                    <div className={`row align-items-center min-vh-100`}>
                        <div className="col col-md-12 col-lg-8 col-xl-6">
                            <div className={`${s.homeTextCenter}`}>
                                <h1>I am Prashant Dawkhar</h1>
                                {/*<h4 className="cd-headline clip home-headline">I’m a <span*/}
                                {/*    className="cd-words-wrapper single-headline" style="width: 149.109px;"><b*/}
                                {/*    className="is-hidden">Developer</b><b className="is-visible">Designer</b><b*/}
                                {/*    className="is-hidden">Freelancer</b></span></h4>*/}

                                <p>I'm the pixel crafter based in Canada. I make the visual to be more interactive.</p>
                                <div className="btn-bar">
                                    <LinkButton link={"#"} label={"Download CV"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<Polygon />*/}
            </section>
            <MouseIcon link={"ABOUT_US"} />
        </>
    )
}

export default Home;