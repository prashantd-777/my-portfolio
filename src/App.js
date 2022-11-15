import React, {useState} from "react";
import './App.scss';
import Loader from "./components/loader";
import Header from "./components/header";
import Home from "./pages/home";
import 'bootstrap/dist/css/bootstrap.css';
import AboutUs from "./pages/about-us";
import Sidebar from "./components/Sidebar";
import MouseIcon from "./components/MouseIcon";
import Portfolio from "./pages/skills";
import Services from "./pages/services";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("HOME");

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

        <main>
            <MouseIcon link={"ABOUT_US"} />
            <Home />
            <AboutUs />
            <Portfolio />
            <Services />
        </main>

    </>
  );
}

export default App;
