import React from "react";

import "./style.css";

function TiposCervejas() {
  return (
    <div className="container secao-resumo mb-5">
      <div className="row">
        <div className="col-sm-3 col-md-3">
          <div className="destaque-home">
            <div
              className="card text-white bg-success mb-3"
              style={{ "max-width": "18rem" }}
            >
              <div className="card-header">Lager</div>
              <div className="card-body">
                <h5 className="card-title">Clara e refrescante</h5>
                <p className="card-text">
                  Uma ótima Breja produzida com puro malte de cevada e lúpulos
                  alemães. Seu sabor remete ao malte, com amargor leve e
                  saboroso. Uma cerveja versátil, que combina com tudo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-3 col-md-3">
          <div className="destaque-home">
            <div
              className="card text-white bg-info mb-3"
              style={{ "max-width": "18rem" }}
            >
              <div className="card-header">Pilsen</div>
              <div className="card-body">
                <h5 className="card-title">De cor amarelo dourado</h5>
                <p className="card-text">
                  Possui uma boa formação de espuma. No aroma, notas de malte se
                  equilibram com o floral do lúpulo. No sabor, um bom equilíbrio
                  do malte com um suave amargor.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-3 col-md-3">
          <div className="destaque-home">
            <div
              className="card text-white bg-dark mb-3"
              style={{ "max-width": "18rem" }}
            >
              <div className="card-header">IPA</div>
              <div className="card-body">
                <h5 className="card-title">De cor amarela escura</h5>
                <p className="card-text">
                  Levemente turva por não ser filtrada. As notas de malte são
                  discretas. O amargor é intenso sem ser agressivo e
                  refrescante. No aroma notas cítricas e de frutas tropicais são
                  evidentes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-3 col-md-3">
          <div className="destaque-home">
            <div
              className="card text-white bg-danger mb-3"
              style={{ "max-width": "18rem" }}
            >
              <div className="card-header">RED ALE</div>
              <div className="card-body">
                <h5 className="card-title">Cerveja avermelhada</h5>
                <p className="card-text">
                  Mix de receitas belga e inglesa. Alta fermentação, produzida
                  com maltes caramelados, evidentes no paladar. O amargor final,
                  suave e levemente adocicado, completa a receita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TiposCervejas;
