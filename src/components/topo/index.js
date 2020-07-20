import React from "react";

import logo from "../../images/icon_logo_beer.png";
import "./style.css";
import Menu from "../menu";

function Topo() {
  return (
    <header id="">
      <div className="bg-dark">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-3 alt-150 logo">
              <img src={logo} alt="Sua Breja" srcset="" />
            </div>
            <div className="col-8 alt-150">
              <h1 style={{ color: "#fff" }}>
                Todo dia é dia de Breja e Refri!
              </h1>
            </div>
          </div>
        </div>
      </div>

      <Menu />
    </header>
  );
}

export default Topo;
