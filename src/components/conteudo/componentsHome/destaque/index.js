import React from "react";

import "./style.css";

function DestaqueHome() {
  return (
    <div class="container mb-3">
      <div class="row">
        <div class="col-md-6">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Europa</strong>
              <h3 class="mb-0">Hoegaarden</h3>
              <div class="mb-1 text-muted">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <p class="card-text mb-auto">
                A Cerveja Hoegaarden Wit 330 ml é uma Witbier belga: feita de
                trigo, de cor clara e turva.
              </p>
              <a href="#" class="stretched-link">
                Conheça a Breja
              </a>
            </div>
            <div class="col-auto d-none d-lg-block">
              <img
                src={
                  process.env.PUBLIC_URL + "/images/destaques/hoegaarden.png"
                }
                alt="Hoegaarden"
                class="img-destaque-principal"
                srcset=""
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-success">
                América do Sul
              </strong>
              <h3 class="mb-0">Colorado</h3>
              <div class="mb-1 text-muted">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <p class="mb-auto">
                Colorado Cauim se refere a uma antiga bebida fermentada de
                cereais e mandioca, fabricada pelos índios brasileiros.
              </p>
              <a href="#" class="stretched-link">
                Conheça a Breja
              </a>
            </div>
            <div class="col-auto d-none d-lg-block">
              <img
                src={process.env.PUBLIC_URL + "/images/destaques/colorado.png"}
                class="img-destaque-principal"
                alt="Colorado"
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestaqueHome;
