import React from "react";

import "./style.css";

import BannerHome from "./componentsHome/banner";
import DestaqueHome from "./componentsHome/destaque";
import TiposCervejas from "./componentsHome/tiposCervejas";
import MarcasCervejas from "./componentsHome/marcasCervejas";
import Email from "./componentsHome/newsletter";

function Conteudo() {
  return (
    <div>
      <div className="secao-home mb-5">
        <BannerHome />
      </div>
      <div className="container mb-3">
        <DestaqueHome />
      </div>
      <div className="container secao-resumo mb-5">
        <TiposCervejas />
      </div>
      <div className="container pt-5 pb-5">
        <MarcasCervejas />
      </div>
      <div className="secao-email bg-dark mb-5 p-3">
        <Email />
      </div>
    </div>
  );
}

export default Conteudo;
