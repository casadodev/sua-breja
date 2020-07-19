import React from "react";
import "./App.css";
import Topo from "./components/topo";
import BannerHome from "./components/banner/bannerhome";
import Rodape from "./components/rodape";

function App() {
  return (
    <div className="App">
      <Topo />
      <BannerHome />
      <Rodape />
    </div>
  );
}

export default App;
