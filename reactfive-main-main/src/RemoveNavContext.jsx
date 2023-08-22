import React, { createContext, useState } from "react";

const RemoveNavContext = createContext();

export const NavProvider = ({ children }) => {
  const [hideNav, sethideNav] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [color, setColor] = useState("whitesmoke");

  const handleToggleContent = () => {
    setShowContent(!showContent);
  };

  const handleToggleNav = () => {
    sethideNav(!hideNav);
    window.scrollTo(0, 0);
  };

  const handleToggleAppear = () => {
    sethideNav(true);
  };

  const handleColorChange = () => {
    setColor("black");
  };

  return (
    <RemoveNavContext.Provider
      value={{
        hideNav,
        handleToggleNav,
        handleToggleAppear,
        showContent,
        handleToggleContent,
        color,
        handleColorChange,
      }}
    >
      {children}
    </RemoveNavContext.Provider>
  );
};

export default RemoveNavContext;
