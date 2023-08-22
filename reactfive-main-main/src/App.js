import "./App.css";
import Home from "./Home";
import ServicesBTN from "./ServicesBTN";
import ProjectsBTN from "./ProjectsBTN";
import AboutBTN from "./AboutBTN";
import CareersBTN from "./CareersBTN";
import ContactBTN from "./ContactBTN";

import { NavLink, Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import RemoveNavContext from "./RemoveNavContext";

import Carousel1 from "./carousels/Carousel1";
import Carousel2 from "./carousels/Carousel2";
import Carousel3 from "./carousels/Carousel3";
import CarouselFour from "./carousels/CarouselFour";
import Carousel5 from "./carousels/Carousel5";
import Carousel6 from "./carousels/Carousel6";
import Carousel7 from "./carousels/Carousel7";
import Carousel8 from "./carousels/Carousel8";
import Carousel9 from "./carousels/Carousel9";
import CareersInput from "./CareersInput";

function App() {
  const { hideNav, handleToggleContent, showContent } =
    useContext(RemoveNavContext);

  return (
    <CSSTransition
      in={showContent} // if its true will display the transition effects
      timeout={1750}
      classNames="fade"
    >
      <div>
        {hideNav && (
          <main>
            <NavLink
              to="/"
              className="linkStylesMRC"
              onClick={handleToggleContent}
            >
              <h1>MCR</h1>
              <p>Construction</p>
            </NavLink>
          </main>
        )}

        {hideNav && (
          <nav id="flex-container2">
            <div className="flex-item1">
              <NavLink
                to="/services"
                className="linkStyles2"
                onClick={handleToggleContent}
              >
                <span>Services</span>
              </NavLink>
            </div>
            <div className="flex-item2">
              <NavLink
                to="/projects"
                className="linkStyles2"
                onClick={handleToggleContent}
              >
                <span>Projects</span>
              </NavLink>
            </div>
            <div className="flex-item3">
              <NavLink
                to="/about"
                className="linkStyles3"
                onClick={handleToggleContent}
              >
                <span>About Us</span>
              </NavLink>
            </div>
            <div className="flex-ite4">
              <NavLink
                to="/careers"
                className="linkStyles4"
                onClick={handleToggleContent}
              >
                <span>Careers</span>
              </NavLink>
            </div>
            <div className="flex-item5">
              <NavLink
                to="/contact"
                className="linkStyles6"
                onClick={handleToggleContent}
              >
                <span>Contact</span>
              </NavLink>
            </div>
            <div className="linkStyles5">Call Now</div>
          </nav>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesBTN />} />
          <Route path="/projects" element={<ProjectsBTN />} />
          <Route path="/about" element={<AboutBTN />} />
          <Route path="/careers" element={<CareersBTN />} />
          <Route path="/contact" element={<ContactBTN />} />

          <Route path="/careersInput" element={<CareersInput />} />

          <Route path="/carousel1" element={<Carousel1 />} />
          <Route path="/carousel2" element={<Carousel2 />} />
          <Route path="/carousel3" element={<Carousel3 />} />
          <Route path="/carousel4" element={<CarouselFour />} />
          <Route path="/carousel5" element={<Carousel5 />} />
          <Route path="/carousel6" element={<Carousel6 />} />
          <Route path="/carousel7" element={<Carousel7 />} />
          <Route path="/carousel8" element={<Carousel8 />} />
          <Route path="/carousel9" element={<Carousel9 />} />

          <Route path="/home" element={<ProjectsBTN />} />
          <Route path="/home2" element={<ProjectsBTN />} />
          <Route path="/home3" element={<ProjectsBTN />} />
          <Route path="/home4" element={<ProjectsBTN />} />
          <Route path="/home5" element={<ProjectsBTN />} />
          <Route path="/home6" element={<ProjectsBTN />} />
          <Route path="/home7" element={<ProjectsBTN />} />
          <Route path="/home8" element={<ProjectsBTN />} />
          <Route path="/home9" element={<ProjectsBTN />} />

          <Route path="/careersHome" element={<CareersBTN />} />
        </Routes>
      </div>
    </CSSTransition>
  );
}

export default App;
