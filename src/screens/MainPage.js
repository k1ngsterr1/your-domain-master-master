import React from "react";

import styles from "../styles/main-styles/main.css";

import Navigation from "../components/Navigation";

import mockup from "../assets/phone-mockup.png";
import deskMockup from "../assets/iphone-13-mockup.png";

const MainPage = () => {
  return (
    <div className="page">
      <div className="container">
        <Navigation />
        <main className="content">
          <h1 className="heading">
            Уведомления о необходимости продления доменов в Telegram.
          </h1>
          <p className="offer-text">
            Lorem ipsum dolor sit amet consectetur. Ac lobortis facilisis ornare
            a luctus. In aliquam montes at ac est lectus praesent. Gravida
            tellus ultricies nunc semper habitant.
          </p>
          <button className="blue-button">Начать пользоваться</button>
        </main>
      </div>
      <img className="phone-image" src={mockup}></img>
      <img className="desktop-image" src={deskMockup}></img>
    </div>
  );
};

export default MainPage;
