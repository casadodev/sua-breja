import React from "react";
import "./style.css";

function Menu() {
  return (
    <div class="navbar p-0 m-0">
      <div class="container">
        <a class="active" href="#">
          <i class="fa fa-fw fa-home"></i> Inicio
        </a>
        <a href="#">
          <i class="fa fa-fw fa-beer"></i> Sobre nós!
        </a>
        <a href="#">
          <i class="fa fa-fw fa-envelope"></i> Tipos de Brejas
        </a>
        <a href="#">
          <i class="fa fa-fw fa-user"></i> Melhores Brejas
        </a>
      </div>
    </div>
  );
}

export default Menu;
