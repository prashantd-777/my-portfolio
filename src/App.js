import React, {useEffect, useState} from "react";
import './App.scss';
import Loader from "./components/Loader";
import Header from "./components/Header";
import Home from "./pages/home";
import 'bootstrap/dist/css/bootstrap.css';
import AboutUs from "./pages/about-us";
import Sidebar from "./components/Sidebar";
import Services from "./pages/services";
import Timeline from "./pages/timeline";
import Work from "./pages/work";
import BackToTop from "./components/BackToTop";
import Contact from "./pages/contact";
import DotNavbar from "./components/DotNavbar";
import ReactGA from 'react-ga';

const TRACKING_ID = "G-RR63S6YQ6S"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.querySelector(".navigation a[href*=" + "HOME" + "]").classList.add("active");
        document.querySelector(".dot-navigation a[href*=" + "HOME" + "]").classList.add("defaultDotActive");
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll, false)
    }, []);

    const handleScroll = () => {
        let scrollY = window?.pageYOffset;
        const sections = document.querySelectorAll("section[id]");

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            let sectionId = current.getAttribute("id");

            if (
                scrollY > sectionTop &&
                scrollY <= sectionTop + sectionHeight
            ){
                document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
                document.querySelector(".dot-navigation a[href*=" + sectionId + "]").classList.add("defaultDotActive");
            } else {
                document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
                document.querySelector(".dot-navigation a[href*=" + sectionId + "]").classList.remove("defaultDotActive");
            }
        });

        let scrollToTopBtn = document.querySelector("#BACK_TO_TOP");
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("showBtn")
        } else {
            scrollToTopBtn.classList.remove("showBtn")
        }
    }

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleLinkClick = (e) => {
        setIsMenuOpen(false);
    }

  return (
    <>
      <Loader />
        <Header
            handleToggleMenu={handleToggleMenu}
        />
        <Sidebar
            isMenuOpen={isMenuOpen}
            handleToggleMenu={handleToggleMenu}
            handleLinkClick={handleLinkClick}
        />
        <DotNavbar/>
        <BackToTop />
        <main>
            <Home />
            <AboutUs />
            <Services />
            <Timeline />
            <Work />
            <Contact />
        </main>

    </>
  );
}

export default App;
