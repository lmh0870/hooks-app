import React from "react";
import App from "./components/App";
import ToDosProvider from "./context";

export default () => (
  <ToDosProvider>
    <App />
  </ToDosProvider>
);
