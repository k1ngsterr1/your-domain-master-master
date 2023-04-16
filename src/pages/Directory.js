import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/directory-styles/directory.css";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Directory = () => {
  return (
    <div className="directory-page">
      <div className="container">
        <Navigation />
        <main className="content">
          <h1 className="directory-heading">Справочник</h1>
          <div className="directory-container">
            <Link className="d-domain-name link" to="/domain-name">
              Доменное имя
            </Link>
            <Link className="d-dns link" to="/domain-name">
              DNS запись
            </Link>
            <Link className="d-long link" to="/domain-name">
              Преимущественное продление
            </Link>
            <Link className="d-registrator link" to="/domain-name">
              Регистратор
            </Link>
            <Link className="d-domain link" to="/domain-name">
              Домен
            </Link>
            <Link className="d-domain-transfer link" to="/domain-name">
              Перенос домена
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Directory;
