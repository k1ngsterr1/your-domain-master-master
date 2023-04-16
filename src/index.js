import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import DomainZones from "./pages/DomainZones";
import Inside from "./pages/Inside";
import Directory from "./pages/Directory";
import DomainName from "./pages/DomainName";
import Blog from "./pages/Blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/zones" element={<DomainZones />}></Route>
          <Route path="/inside" element={<Inside />}></Route>
          <Route path="/directory" element={<Directory />}></Route>
          <Route path="/domain-name" element={<DomainName />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
