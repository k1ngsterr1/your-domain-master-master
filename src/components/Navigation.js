import React from "react";

import styles from "../styles/burger-styles/burger.css";

import logo from "../assets/Logo.svg";
import { slide as Menu } from "react-burger-menu";
import { Link, useNavigate } from "react-router-dom";

import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";

import { VscTriangleDown } from "react-icons/vsc";

var cross_styles = {
  bmCrossButton: {
    top: "clamp(15px,7.009345794392523vw,60px)",
  },

  bmMenu: {
    boxShadow: "0px 0px 37px 15px rgba(0, 0, 0, 0.25)",
    display: "flex",
    flexDirection: "column",
  },

  bmCross: {
    background: "#588EF7",
    width: "5px",
    height: "30px",
  },

  bmItemList: {
    width: "auto",
    height: "auto",
    marginRight: "clamp(12.5px,5.841121495327103vw,50px)",
    marginTop: "clamp(65px,30.373831775700936vw,260px)",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "clamp(11px,5.140186915887851vw,44px)",
    textAlign: "right",
    color: "#1D1D1D",
    textDecoration: "none",
    overflowX: "hidden",
  },
  bmOverlay: {
    display: "none",
  },
};

const options = ["RU", "EN"];
const defaultOption = options[0];

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="navigation">
      <nav className="mobile-navigation">
        <img className="logo" onClick={() => navigate("/")} src={logo} />
        <Menu right styles={cross_styles}>
          <Link className="link" to="/">
            Бот
          </Link>
          <Link className="link" to="/">
            Главная
          </Link>
          <Link className="link" to="/zones">
            Доменные зоны
          </Link>
          <Link className="link" to="/directory">
            Справочник
          </Link>
          <Link className="link" to="/blog">
            Блог
          </Link>
          <div className="language-container">
            <a className="en link">RU</a>
            <a className="ru link">EN</a>
          </div>
        </Menu>
      </nav>
      <div className="desktop-navigation">
        <img onClick={() => navigate("/")} className="desk-logo" src={logo} />
        <nav className="nav-links">
          <Link className="link bot" to="/">
            Бот
          </Link>
          <Link className="link domain" to="/zones">
            Доменные зоны
          </Link>
          <Link className="link directory" to="/directory">
            Справочник
          </Link>
          <Link className="link blog" to="/blog">
            Блог
          </Link>
        </nav>
        <Dropdown
          options={options}
          // onChange={}
          value={defaultOption}
          placeholder="Select an option"
          className="dropdown"
        />
      </div>
    </div>
  );
};

export default Navigation;
