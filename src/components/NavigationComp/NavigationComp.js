import React, { useEffect, useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import PageLinks from "./PageLinks/PageLinks";
import SideDrawerBackdrop from "./SideDrawerBackdrop/SideDrawerBackdrop";
import { GlobalContext } from "../../context/GlobalState";
//user
//logoutuser

// const [state, setState] = React.useState({
//     modalShow: false,
//     modalResume: false,
//     sideDrawerOpen: false,
//     // currentPage: "Transactions",
//   });
// let isMounted = false;
const NavigationComp = (props) => {
  const {
    user,
    logoutUser,
    handlePageChange,
    currentPage,
    sideDrawerOpen,
    drawerToggleClickHandler,
    drawerBackdropClickHandler,
  } = useContext(GlobalContext);

  let history = useHistory();
  let historia = useLocation();
  let homeLinkText = "Home";
  let aboutLinkText = "About";
  let landingLinkText = "Hello!";
  let contactLinkText = "Contact";
  let portfolioLinkText = "Portfolio";

  const iconStyle = {
    iconFont: {
      fontSize: "20px",
      color: "white",
      paddingBottom: "5px",
      cursor: "pointer",
    },
  };
  let sideDrawerBackdrop;
  let toolBarLeftIcon;
  let nameOfPage;

  if (sideDrawerOpen) {
    sideDrawerBackdrop = (
      <SideDrawerBackdrop
        drawerBackdropClickHandler={drawerBackdropClickHandler}
      />
    );
  }


  if (
    currentPage === "landing" ||
    window.location.pathname ===
      ("/" ||
        "https://88dennis.github.io/portfolio-dennis-sarmiento-react-mern-dev")
  ) {
    toolBarLeftIcon = (
      <i
        className="terminal icon"
        style={iconStyle.iconFont}
        onClick={() => handlePageChange("landing")}
        style={{ marginLeft: "10px", color: "rgb(248, 248, 248)" }}
      ></i>
    );
    nameOfPage = "Hello!";
  } else if (
    currentPage === "home" ||
    window.location.pathname ===
      ("/home" ||
        "https://88dennis.github.io/portfolio-dennis-sarmiento-react-mern-dev/home")
  ) {
    toolBarLeftIcon = (
      <i
        className="home icon"
        style={iconStyle.iconFont}
        onClick={() => handlePageChange("home")}
        style={{ marginLeft: "10px", color: "rgb(248, 248, 248)" }}
      ></i>
    );
    nameOfPage = "Home";
  } else if (
    currentPage === "portfolio" ||
    window.location.pathname ===
      ("/portfolio" ||
        "https://88dennis.github.io/portfolio-dennis-sarmiento-react-mern-dev/portfolio")
  ) {
    toolBarLeftIcon = (
      <i
        className="code icon"
        style={iconStyle.iconFont}
        onClick={() => handlePageChange("portfolio")}
        style={{ marginLeft: "10px", color: "rgb(248, 248, 248)" }}
      ></i>
    );
    nameOfPage = "Portfolio";
  } else if (
    currentPage === "about" ||
    window.location.pathname ===
      ("/about" ||
        "https://88dennis.github.io/portfolio-dennis-sarmiento-react-mern-dev/about")
  ) {
    toolBarLeftIcon = (
      <i
        className="user secret icon"
        style={iconStyle.iconFont}
        onClick={() => handlePageChange("about")}
        style={{ marginLeft: "10px", color: "rgb(248, 248, 248)" }}
      ></i>
    );
    nameOfPage = "About";
  } else if (
    currentPage === "contact" ||
    window.location.pathname ===
      ("/contact" ||
        "https://88dennis.github.io/portfolio-dennis-sarmiento-react-mern-dev/contact")
  ) {
    toolBarLeftIcon = (
      <i
        className="address book icon"
        style={iconStyle.iconFont}
        onClick={() => handlePageChange("contact")}
        style={{ marginLeft: "10px", color: "rgb(248, 248, 248)" }}
      ></i>
    );
    nameOfPage = "Contact";
  }


  return (
    <>
  
   
    >
      <Toolbar
        toolBarLeftIcon={toolBarLeftIcon}
        // nameOfPage={!user ? "You are logged out" : nameOfPage}
        nameOfPage={nameOfPage}
        toggleDrawer={drawerToggleClickHandler}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      >
        <ul>
          <li
            className="toolBarSpanName"
            style={{
              display: homeLinkText.toLowerCase() === nameOfPage.toLowerCase() ? "none" : "",
            }}
          >
            <Link to="/home" onClick={() => handlePageChange("home")}>
              {homeLinkText}
            </Link>
          </li>
        
          <li
            className="toolBarSpanName"
            style={{
              display: aboutLinkText.toLowerCase() === nameOfPage.toLowerCase() ? "none" : "",
            }}
          >
            <Link to="/about" onClick={() => handlePageChange("about")}>
              {aboutLinkText}
            </Link>
          </li>

          <li
            className="toolBarSpanName"
            style={{
              display: portfolioLinkText.toLowerCase() === nameOfPage.toLowerCase() ? "none" : "",
            }}
          >
            <Link to="/portfolio" onClick={() => handlePageChange("portfolio")}>
              {portfolioLinkText}
            </Link>
          </li>


          <li
            className="toolBarSpanName"
            style={{
              display: contactLinkText.toLowerCase() === nameOfPage.toLowerCase() ? "none" : "",
            }}
          >
            <Link to="/contact" onClick={() => handlePageChange("contact")}>
              {contactLinkText}
            </Link>
          </li>

          {/* <li
            className="toolBarSpanName"
            style={{
              display: landingLinkText.toLowerCase() === nameOfPage.toLowerCase() ? "none" : "",
            }}
          >
            <Link to="/" onClick={() => handlePageChange("landing")}>
              {landingLinkText}
            </Link>
          </li> */}

        </ul>
        {/* <Link to={`/${user.userName}/dashboard`}>
          <button title={!user ? "Login" :"Home"} className="modalButton">
         
            {!user ? "Login" :"Home"}
          </button>
        </Link> */}
        {/* <button title="Contact Info" className="modalButton" onClick={modalShowHandler}><i className="address book icon" style={iconStyle.iconFont}></i></button> */}
      </Toolbar>
      <SideDrawer show={sideDrawerOpen}>
        <PageLinks
          show={sideDrawerOpen}
          backToSamePage={drawerBackdropClickHandler}
          handleLogOut={logoutUser}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </SideDrawer>
      {sideDrawerBackdrop}
   
    </>
  );
};

export default NavigationComp;