import React from "react";

import styles from "../styles/about-styles/about.css";

import iphone from "../assets/phone-mockup.png";

import one from "../assets/01.svg";
import two from "../assets/02.svg";
import three from "../assets/03.svg";
import four from "../assets/04.svg";

function Tag(props) {
  return (
    <div className="a-container">
      <img className="a-img" src={props.view}></img>
      <h2 className="three-heading">{props.heading}</h2>
      <p className="a-paragraph">{props.paragraph}</p>
    </div>
  );
}

const AboutPage = () => {
  return (
    <div className="a-page">
      <div className="container">
        <div className="content">
          <div className="zero-one-c">
            <span className="number">01</span>
            <Tag
              view={one}
              heading="Всегда видно уведомление"
              paragraph="Telegram мы используем практически каждый день и не пропустим уведомление о необходимости продления домена. Вероятность не продлить и потерять свой домен, уменьшается."
            ></Tag>
          </div>
          <div className="zero-two-c">
            <span className="number">02</span>
            <Tag
              view={two}
              heading="Все домены в одном месте"
              paragraph="Домены могут быть зарегистрированы у разных регистраторов, если необходимо посмотреть статус доменов, то нужно заходить на сайт регистратора, вспоминать пароль и логин, искать домен и информацию о нем в личном кабинете. В telegram боте нужно нажать только одну кнопку."
            ></Tag>
          </div>
          <div className="zero-three-c">
            <span className="number">03</span>
            <Tag
              view={three}
              heading="Подстраховка"
              paragraph="Telegram мы используем практически каждый день и не пропустим уведомление о необходимости продления домена. Вероятность не продлить и потерять свой домен, уменьшается."
            ></Tag>
          </div>
          <div className="zero-four-c">
            <span className="number">04</span>
            <Tag
              view={four}
              heading="Купить домен"
              paragraph="Добавляйте в бота домен, который вы хотели бы зарегистрировать, но сейчас он занят. Возможно, что через время, домен освободиться. Например, его забыли продлить или он стал не нужным текущему владельцу. Бот пришлет вам уведомление, что домен свободен для регистрации и его можно зарегистрировать. "
            ></Tag>
          </div>
        </div>
        <img className="phone-image" src={[iphone]}></img>
      </div>
    </div>
  );
};

export default AboutPage;
