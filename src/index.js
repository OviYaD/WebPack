require("file-loader?name=[name].[ext]!../public/index.html");
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
const appElement = document.getElementById("app");
const root = ReactDOM.createRoot(appElement);
root.render(<App></App>);
