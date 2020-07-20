import React from "react";

import "./style.css";

const Rodape = () => {
  return (
    <footer class="footer">
      <div class="container bottom_border">
        <div class="row">
          <div class="col-sm-4 col-md col-sm-4 col-12 col">
            <h5 class="headin5_amrc col_white_amrc pt2">Nós aqui</h5>

            <p class="mb10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <p>
              <i class="fa fa-location-arrow"></i> algum endereço
            </p>
            <p>
              <i class="fa fa-phone"></i> +55 11 98765-4321
            </p>
            <p>
              <i class="fa fa fa-envelope"></i> chama@suabreja.com.br
            </p>
          </div>

          <div class="col-sm-4 col-md col-6 col">
            <h5 class="headin5_amrc col_white_amrc pt2">Links rápidos</h5>

            <ul class="footer_ul_amrc">
              <li>
                <a href="#">um link</a>
              </li>
              <li>
                <a href="#">oto link</a>
              </li>
              <li>
                <a href="#">oto oto link</a>
              </li>
              <li>
                <a href="#">mais oto link</a>
              </li>
              <li>
                <a href="#">novo link</a>
              </li>
              <li>
                <a href="#">oto agora sim link</a>
              </li>
            </ul>
          </div>

          <div class="col-sm-4 col-md col-6 col">
            <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>

            <ul class="footer_ul_amrc">
              <li>
                <a href="#">um link</a>
              </li>
              <li>
                <a href="#">oto link</a>
              </li>
              <li>
                <a href="#">oto oto link</a>
              </li>
              <li>
                <a href="#">mais oto link</a>
              </li>
              <li>
                <a href="#">novo link</a>
              </li>
              <li>
                <a href="#">oto agora sim link</a>
              </li>
            </ul>
          </div>

          <div class="col-sm-4 col-md col-12 col">
            <h5 class="headin5_amrc col_white_amrc pt2">Siga a SuaBreja</h5>

            <ul class="footer_ul2_amrc">
              <li>
                <a href="#">
                  <i class="fab fa-twitter fleft padding-right"></i>
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing...
                  <a href="#">https://www.lipsum.com/</a>
                </p>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter fleft padding-right"></i>
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing...
                  <a href="#">https://www.lipsum.com/</a>
                </p>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter fleft padding-right"></i>
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing...
                  <a href="#">https://www.lipsum.com/</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="container">
        <ul class="foote_bottom_ul_amrc">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Tipos de Brejas</a>
          </li>
          <li>
            <a href="#">Onde compra</a>
          </li>
          <li>
            <a href="#">Blog ?</a>
          </li>
          <li>
            <a href="#">Contato ?</a>
          </li>
        </ul>

        <p class="text-center">
          Copyright? Eu, mas podem usar a vontade TMJ - @2017
        </p>

        <ul class="social_footer_ul">
          <li>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Rodape;
