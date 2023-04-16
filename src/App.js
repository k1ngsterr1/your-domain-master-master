import React from "react";

import styles from "./styles/app-styles/app.css";

import MainPage from "./screens/MainPage";
import AboutPage from "./screens/AboutPage";
import DomainPage from "./screens/DomainPage";
import GuardPage from "./screens/GuardPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <MainPage></MainPage>
      <AboutPage></AboutPage>
      <GuardPage></GuardPage>
      <DomainPage></DomainPage>
      <Footer></Footer>
    </div>
  );
};

export default App;
