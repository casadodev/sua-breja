import React from "react";

import "./style.css";

const Email = () => {
  return (
    <div class="secao-email bg-dark mb-5 p-3">
      <div class="container">
        <h2 class="center">
          Receba nossas promoções, descontos e novidades em seu email
        </h2>

        <form class="form-inline">
          <div class="form-group mx-sm-10 col-6 mb-2 align-items-center">
            <label for="email" class="sr-only"></label>
            <input
              type="text"
              class="form-control col-12"
              id="email"
              placeholder="Seu melhor e-mail"
            />
          </div>
          <button type="submit" class="btn btn-primary mb-2">
            Enviar
          </button>
        </form>
        <small id="helpId" class="form-text text-muted">
          Não vou te mandar coisas zoadas
        </small>
      </div>
    </div>
  );
};

export default Email;
