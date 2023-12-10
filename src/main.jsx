import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalProvaider } from "./GlobalContext/GlobalContext.jsx";
import Appcss from "./AppStyle.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalProvaider>
    <Appcss />
    <App />
  </GlobalProvaider>
);
