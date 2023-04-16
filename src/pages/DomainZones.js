import React from "react";

import styles from "../styles/zones-styles/zones.css";
import Navigation from "../components/Navigation";

import { FaChevronRight } from "react-icons/fa";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Zone(props) {
  return (
    <div className="zone">
      <span className="zone-name">{props.name}</span>
      <Link className="zone-button" to="/inside">
        <FaChevronRight></FaChevronRight>
      </Link>
    </div>
  );
}

const DomainZones = () => {
  return (
    <div className="domain-page">
      <div className="container">
        <Navigation />
        <main className="content">
          <h1 className="zones-heading">Доменные зоны</h1>
          <div className="zones-container-mob">
            <div className="zone-row">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
            <div className="zone-row next">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
            <div className="zone-row next">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
            <div className="zone-row next">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
            <div className="zone-row next">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
            <div className="zone-row next">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
            <div className="zone-row next">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
            <div className="zone-row next">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
            <div className="zone-row next">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
            <div className="zone-row next last">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
          </div>
          <div className="zones-container-desk">
            <div className="zone-row">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
            <div className="zone-row next">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
            <div className="zone-row next">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
            <div className="zone-row next">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
            <div className="zone-row next">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
            <div className="zone-row next">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
            <div className="zone-row next">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
            <div className="zone-row next">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
            <div className="zone-row next">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
            <div className="zone-row next last">
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
              <Zone name=".ADS"></Zone>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DomainZones;
