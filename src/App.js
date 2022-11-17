import React, {useEffect, useState} from "react";
import './App.scss';
import Loader from "./components/Loader";
import Header from "./components/Header";
import Home from "./pages/home";
import 'bootstrap/dist/css/bootstrap.css';
import AboutUs from "./pages/about-us";
import Sidebar from "./components/Sidebar";
import MouseIcon from "./components/MouseIcon";
import Portfolio from "./pages/skills";
import Services from "./pages/services";
import Timeline from "./pages/timeline";
import Work from "./pages/work";
import BackToTop from "./components/BackToTop";
import Contact from "./pages/contact";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("HOME");

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll, false)
    }, []);

    const handleScroll = () => {
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
        setActiveTab(e?.target?.dataset?.target);
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
            activeTab={activeTab}
            handleToggleMenu={handleToggleMenu}
            handleLinkClick={handleLinkClick}
        />
        <BackToTop />

        <main>
            <Home />
            <AboutUs />
            <Portfolio />
            <Services />
            <Timeline />
            <Work />
            <Contact />
        </main>

    </>
  );
}

export default App;
