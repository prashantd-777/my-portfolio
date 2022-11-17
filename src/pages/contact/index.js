import s from "./contact.module.scss";
import SectionTitle from "../../components/SectionTitle";
import LabelText from "../../components/LabelText";
import SocialIcons from "../../components/SocialIcons";
import {SOCIAL_LIST} from "../../constants/social";
import {RED_HEART} from "../../constants/cdnImagePath";
import Polygon from "../../components/Polygon";
import Title from "../../components/Title";
import React from "react";

const Contact = () => {
    return (
        <section id={"CONTACT_US"} className={`${s.contactContainer}`}>
            <Title label={"CONTACT ME"} />

            <div className={"container"}>
                <div className="row py-5 min-vh-100">
                    <div className={`col-12 mb-3`}>
                        <SectionTitle label={"GET IN TOUCH"}/>
                    </div>

                    <div className={"col-lg-6 col-md-12 col-sm-12 m-auto"}>
                        <div className={`${s.contactDetail}`}>
                            <h4>Contact</h4>
                            <p className={`${s.contactText}`}>Liked my profile or wanna catchup over a cup of Coffee!!
                                Find me here.</p>
                            <LabelText
                                iconClass={"fa fa-map-marker"}
                                label={"Address:"}
                                desc={"Pune, India"}
                            />
                            <LabelText
                                iconClass={"fa fa-envelope"}
                                label={"Email:"}
                                desc={(
                                    <a href={"mailto:dawkharp79@gmail.com"} target={"_blank"}>
                                        dawkharp79@gmail.com
                                    </a>
                                )}
                            />
                            <LabelText
                                iconClass={"fa fa-globe"}
                                label={"Website:"}
                                desc={"prashantdawkhar79.com"}
                            />
                            <div className={`${s.socialIcons}`}>
                                <p>Find:</p>
                                {SOCIAL_LIST.map(item => {
                                    return (
                                        <SocialIcons
                                            key={item?.id}
                                            icon={<i className={item?.iconClass}></i>}
                                            link={item?.link}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className={"col-12 mt-5"}>
                        <p className={`${s.copyRight}`}>© 2022 , made with
                            <span>{" "}
                                <img height="20px" alt="Heart" src={RED_HEART} />
                                {" "}
                            </span>by Prashant Dawkhar for a better web.
                        </p>
                    </div>
                </div>
            </div>
            <Polygon />
        </section>
    )
}

export default Contact;