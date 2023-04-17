import React from "react";
import Navigation from "../components/Navigation";

import styles from "../styles/blog-styles/blog.css";
import cardImage from "../assets/card_img.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card">
      <img className="card-image" src={cardImage}></img>
      <h4 className="card-heading">{props.heading}</h4>
      <p className="card-paragraph">{props.paragraph}</p>
      <Link className="card-link" to="/blog-inside">
        {props.link}
      </Link>
    </div>
  );
}

const Blog = () => {
  return (
    <div className="blog-page">
      <div className="container">
        <Navigation></Navigation>
        <main className="content">
          <div className="card-row">
            <Card
              view={cardImage}
              heading="Заголовок статьи"
              paragraph="Если после проверки всех этих возможных причин вы все еще не можете просмотреть таблицы базы данных через SSH-туннель в PHPStorm, попробуйте перезапустить PHPStorm и проверить настройки соединения с базой данных еще раз. Если проблема сохраняется, свяжитесь с...."
              link="Читать дальше"
            ></Card>
            <Card
              view={cardImage}
              heading="Заголовок статьи"
              paragraph="Если после проверки всех этих возможных причин вы все еще не можете просмотреть таблицы базы данных через SSH-туннель в PHPStorm, попробуйте перезапустить PHPStorm и проверить настройки соединения с базой данных еще раз. Если проблема сохраняется, свяжитесь с...."
              link="Читать дальше"
            ></Card>
            <Card
              view={cardImage}
              heading="Заголовок статьи"
              paragraph="Если после проверки всех этих возможных причин вы все еще не можете просмотреть таблицы базы данных через SSH-туннель в PHPStorm, попробуйте перезапустить PHPStorm и проверить настройки соединения с базой данных еще раз. Если проблема сохраняется, свяжитесь с...."
              link="Читать дальше"
            ></Card>
          </div>
          <div className="card-row">
            <Card
              view={cardImage}
              heading="Заголовок статьи"
              paragraph="Если после проверки всех этих возможных причин вы все еще не можете просмотреть таблицы базы данных через SSH-туннель в PHPStorm, попробуйте перезапустить PHPStorm и проверить настройки соединения с базой данных еще раз. Если проблема сохраняется, свяжитесь с...."
              link="Читать дальше"
            ></Card>
            <Card
              view={cardImage}
              heading="Заголовок статьи"
              paragraph="Если после проверки всех этих возможных причин вы все еще не можете просмотреть таблицы базы данных через SSH-туннель в PHPStorm, попробуйте перезапустить PHPStorm и проверить настройки соединения с базой данных еще раз. Если проблема сохраняется, свяжитесь с...."
              link="Читать дальше"
            ></Card>
            <Card
              view={cardImage}
              heading="Заголовок статьи"
              paragraph="Если после проверки всех этих возможных причин вы все еще не можете просмотреть таблицы базы данных через SSH-туннель в PHPStorm, попробуйте перезапустить PHPStorm и проверить настройки соединения с базой данных еще раз. Если проблема сохраняется, свяжитесь с...."
              link="Читать дальше"
            ></Card>
          </div>
          <div className="card-row">
            <Card
              view={cardImage}
              heading="Заголовок статьи"
              paragraph="Если после проверки всех этих возможных причин вы все еще не можете просмотреть таблицы базы данных через SSH-туннель в PHPStorm, попробуйте перезапустить PHPStorm и проверить настройки соединения с базой данных еще раз. Если проблема сохраняется, свяжитесь с...."
              link="Читать дальше"
            ></Card>
            <Card
              view={cardImage}
              heading="Заголовок статьи"
              paragraph="Если после проверки всех этих возможных причин вы все еще не можете просмотреть таблицы базы данных через SSH-туннель в PHPStorm, попробуйте перезапустить PHPStorm и проверить настройки соединения с базой данных еще раз. Если проблема сохраняется, свяжитесь с...."
              link="Читать дальше"
            ></Card>
            <Card
              view={cardImage}
              heading="Заголовок статьи"
              paragraph="Если после проверки всех этих возможных причин вы все еще не можете просмотреть таблицы базы данных через SSH-туннель в PHPStorm, попробуйте перезапустить PHPStorm и проверить настройки соединения с базой данных еще раз. Если проблема сохраняется, свяжитесь с...."
              link="Читать дальше"
            ></Card>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
