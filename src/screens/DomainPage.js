import React from "react";

import styles from "../styles/domain-styles/domain.css";

const DomainPage = () => {
  return (
    <div className="d-page">
      <div className="container">
        <h4 className="domain-heading">
          <span className="numbers">723</span> доменов
        </h4>
        <p className="d-paragraph">
          Такое количество доменов добавлено в бот для отслеживания
        </p>
      </div>
    </div>
  );
};

export default DomainPage;
