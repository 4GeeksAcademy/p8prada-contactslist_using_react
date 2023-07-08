
import React from "react";
import { createRoot } from "react-dom/client";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Router from "./component/Router.jsx";

const container = document.querySelector("#app");
const root = createRoot(container);
root.render(<Router/>);

