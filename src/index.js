import React from "react";
import { render as Render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import App from "./App";

Render(
<Router>
    <App />
</Router>
, document.querySelector("#root"));