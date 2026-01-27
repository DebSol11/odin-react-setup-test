import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import { Food } from "./Food.jsx";
import { Test } from "./HTMLtoJSX.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <Food />
    <Test />
  </StrictMode>,
);
