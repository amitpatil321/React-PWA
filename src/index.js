import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerSw from "./swDev";

ReactDOM.render(<App />, document.getElementById("root"));

registerSw();
