import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
       
        <div class="ps-subscribe">
          <div class="ps-container">
            <div class="row">
              <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 ">
                <h3>
                  <i class="fa fa-envelope"></i>
                  inscrivez-vous à la newsletter
                </h3>
              </div>
              <div class="col-lg-4 col-md-7 col-sm-12 col-xs-12 ">
                <form
                  class="ps-subscribe__form"
                  action="do_action"
                  method="post"
                >
                  <input class="form-control" type="text" placeholder="" />
                  <button id="inscr">Inscription</button>
                </form>
              </div>
              <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12 ">
                <p>
                  Bienvenue chez <span id="bien">  ArtisanatSHOP  </span>  Maroc-2021.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="ps-footer bg--cover"
          data-background="images/background/parallax.jpg"
        >
          <div class="ps-footer__content">
            <div class="ps-container">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                  <aside class="ps-widget--footer ps-widget--info">
                    <header>
                      <h2 style={{ color: "white" }}>
                        Artisanat<span id="bien"style={{ color: "yellow" }}>SHOP</span>
                      </h2>
                      <h3 class="ps-widget__title">Adresse 1</h3>
                    </header>
                    <footer>
                      <p>
                        <strong>Avenue Ibn Khaldoun, Tanger, Maroc</strong>
                      </p>
                      <p>
                        Email:
                        <a href="mailto:support@artisanatshop.com">
                          support@artisanatshop.com
                        </a>
                      </p>
                      <p>Phone: +212 6428-55358</p>
                      <p>Fax: +212 4002-2421</p>
                    </footer>
                  </aside>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                  <aside class="ps-widget--footer ps-widget--info second">
                    <header>
                      <h3 class="ps-widget__title">Adresse 2</h3>
                    </header>
                    <footer>
                      <p>
                        <strong>
                        Avenue Iberia , Tanger, Maroc
                        </strong>
                      </p>
                      <p>
                        Email:
                        <a href="mailto:support@store.com">
                          support@artisanatshop.com
                        </a>
                      </p>
                      <p>Phone: +212 44444 4444</p>
                      <p>Fax: +212 33333 3333</p>
                    </footer>
                  </aside>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                  <aside class="ps-widget--footer ps-widget--link">
                    <header>
                      <h3 class="ps-widget__title">Trouvez notre Magasin!</h3>
                    </header>
                    <footer>
                      <ul class="ps-list--link">
                        <li>
                          <a href="/">Code de coupons et réduction</a>
                        </li>
                        <li>
                          <a href="/">Enregistrez-vous à la newsletter</a>
                        </li>
                        <li>
                          <a href="/">Donnez-nous votre avis</a>
                        </li>
                        <li>
                          <a href="/">Voir les employés</a>
                        </li>
                      </ul>
                    </footer>
                  </aside>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                  <aside class="ps-widget--footer ps-widget--link">
                    <header>
                      <h3 class="ps-widget__title">Aide</h3>
                    </header>
                    <footer>
                      <ul class="ps-list--line">
                        <li>
                          <a href="/">État de la commande</a>
                        </li>
                        <li>
                          <a href="/">Expédition et livraison</a>
                        </li>
                        <li>
                          <a href="/">Retours</a>
                        </li>
                        <li>
                          <a href="/">Options de paiement</a>
                        </li>
                        <li>
                          <a href="/">Contactez-nous</a>
                        </li>
                      </ul>
                    </footer>
                  </aside>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                  <aside class="ps-widget--footer ps-widget--link">
                    <header>
                      <h3 class="ps-widget__title">Produits</h3>
                    </header>
                    <footer>
                      <ul class="ps-list--line">
                        <li>
                          <a href="/">Tapis</a>
                        </li>
                        <li>
                          <a href="/">Cuir</a>
                        </li>
                        <li>
                          <a href="/">Broderie</a>
                        </li>
                        <li>
                          <a href="/">Vannerie</a>
                        </li>
                        <li>
                          <a href="/">Textile</a>
                        </li>
                      </ul>
                    </footer>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <div class="ps-footer__copyright">
            <div class="ps-container">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                  <p>
                    &copy; <a id="ar"href="/">ARTISANATSHOP</a>
                  </p>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                  <ul class="ps-social">
                    <li>
                      <a href="/">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
