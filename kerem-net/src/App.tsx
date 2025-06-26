import React from "react";
import "./App.css";
import Layout from "./Components/ApplicationLayout/Layout";
import Pages from "./Pages/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <Pages />
      </BrowserRouter>
    </div>
  );
}
export default App;
