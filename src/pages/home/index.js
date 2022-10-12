import React from "react";
import s from "./home.module.scss";
import LinkButton from "../../components/Button/LinkButton";
import MouseIcon from "../../components/MouseIcon";
import Polygon from "../../components/Polygon";

const Home = () => {
    return (
        <section id="home" className={`${s.homeBanner} gray-bg`}>
            <div className="sec-round">
                <div className="container full-height">
                    <div className="round-item round-item-1"></div>
                    <div className="round-item round-item-2"></div>
                    <div className="round-item round-item-3"></div>
                    <div className="round-item round-item-4"></div>
                    <div className="round-item round-item-5"></div>
                </div>
            </div>

            <div className="container">
                <div className={`row align-items-center ${s.fullScreen}`}>
                    <div className="col col-md-12 col-lg-8 col-xl-6">
                        <div className={`${s.homeTextCenter} theme-after mt-4`}>
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
            <MouseIcon link={"#"} />
            <Polygon />
        </section>
    )
}

export default Home;