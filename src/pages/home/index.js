import React from "react";
import s from "./home.module.scss";
import LinkButton from "../../components/Button/LinkButton";
import MouseIcon from "../../components/MouseIcon";

const Home = () => {
    return (
        <>
            <section id="HOME" className={`${s.homeBanner}`}>
                <div className="container">
                    <div className={`row align-items-center min-vh-100`}>
                        <div className="col col-md-12 col-lg-8 col-xl-6">
                            <div className={`${s.homeTextCenter}`}>
                                <h4>Hello, my name is</h4>
                                <h1>Prashant Dawkhar</h1>
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