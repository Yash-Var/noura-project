import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Focus from "./Focus";
import Home from "./Home";
import reportWebVitals from "./reportWebVitals";
import Water from "./Water";
import Routerr from "./Routerr";
import { Getup2 } from "./Getup2";
import { Getup } from "./Getup";
import { Getup1 } from "./Getup1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routerr />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
