import React from "react";

import styles from "../styles/footer-styles/footer.css";

import logo from "../assets/Logo-White.svg";

import { BsTelegram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <img className="white-logo" src={logo}></img>
        <nav className="footer-navigation">
          <a className="a-link">Бот</a>
          <Link className="link">Доменные зоны</Link>
          <Link className="link">Справочник</Link>
          <Link className="link">Блог</Link>
          <div className="social-icons">
            <a className="icon-link">
              <BsTelegram className="icon telegram"></BsTelegram>
            </a>
            <a className="icon-link">
              <BsTwitter className="icon twitter"></BsTwitter>
            </a>
            <a className="icon-link">
              <BsLinkedin className="icon linkedin"></BsLinkedin>
            </a>
          </div>
        </nav>
        <div className="footer-navigation-desktop">
          <nav className="footer-nav-links-desk">
            <a className="a-link">Бот</a>
            <Link className="link">Доменные зоны</Link>
            <Link className="link">Справочник</Link>
            <Link className="link">Блог</Link>
          </nav>
          <div className="social-icons">
            <a className="icon-link">
              <BsTelegram className="icon telegram"></BsTelegram>
            </a>
            <a className="icon-link">
              <BsTwitter className="icon twitter"></BsTwitter>
            </a>
            <a className="icon-link">
              <BsLinkedin className="icon linkedin"></BsLinkedin>
            </a>
          </div>
        </div>
      </div>
      <span className="separator"></span>
      <div className="your-domain">
        <p className="footer-paragraph">Ⓒ 2024 YourDomainBot.</p>
      </div>
    </footer>
  );
};

export default Footer;
