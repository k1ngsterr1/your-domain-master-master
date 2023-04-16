import React from "react";

import styles from "../styles/inside-styles/inside.css";

import Navigation from "../components/Navigation";

import { BsGlobe } from "react-icons/bs";
import Footer from "../components/Footer";

function Property(props) {
  return (
    <div className="parameters">
      <BsGlobe className="globe"></BsGlobe>
      <div className="parameters-text">
        <span className="parameters-property">{props.property}</span>
        <span className="parameters-value">{props.value}</span>
      </div>
    </div>
  );
}

const Inside = () => {
  return (
    <div className="inside-page">
      <div className="container">
        <Navigation />
        <main className="content">
          <h1 className="inside-heading">Доменная зона .ONLINE</h1>
          <p className="inside-paragraph">
            Доменная зона ОНЛАЙН — отличный выбор для различных организаций и
            проектов любой тематики, желающих чётко обозначить направленность на
            Интернет без какой-либо национальной или государственной привязки.
            Используйте домен ОНЛАЙН, чтобы подчеркнуть ваше желание всегда быть
            на связи с пользователями.
          </p>
          <div className="parameters-container">
            <Property
              property="Параметр доменной зоны"
              value="Значение доменной зоны"
            ></Property>
            <Property
              property="Параметр доменной зоны"
              value="Значение доменной зоны"
            ></Property>
            <Property
              property="Параметр доменной зоны"
              value="Значение доменной зоны"
            ></Property>
            <Property
              property="Параметр доменной зоны"
              value="Значение доменной зоны"
            ></Property>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Inside;
