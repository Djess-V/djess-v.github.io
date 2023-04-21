import React from "react";
import santaClausLogo from "./img/santa-claus-logo.svg";
import mainImage from "./img/podarki_prazdnik_novyy_god_lka.jpg";
import services01Image from "./img/services/01.svg";
import services02Image from "./img/services/02.svg";
import services03Image from "./img/services/03.svg";
import services04Image from "./img/services/04.svg";
import services05Image from "./img/services/05.svg";
import services06Image from "./img/services/06.svg";
import services07Image from "./img/services/07.svg";
import kosmosImage from "./img/presents/kosmos_vnezemnoj_gory.jpg";
import gitaryImage from "./img/presents/elektrogitary_gitary_muzykalnye_instrumenty.jpg";
import macaronsImage from "./img/presents/macarons_desert_pechene_raznotsvetnyj.jpg";
import pandyImage from "./img/presents/pandy_dzhojstiki_kartridzhi.jpg";
import santaClaus01About_meImage from "./img/about_me/santa-claus-svgrepo-com.svg";
import santaClaus02About_meImage from "./img/about_me/santa-claus-stuck-in-the-chimney-svgrepo-com.svg";
import clients01Image from "./img/partners/free-sticker-rabbit-4193292.png";
import clients02Image from "./img/partners/free-sticker-fox-4193241.png";
import clients03Image from "./img/partners/free-sticker-cat-4193258.png";
import clients04Image from "./img/partners/free-sticker-reindeer-4193244.png";
import clients05Image from "./img/partners/free-sticker-rabbit-4193295.png";
import clients06Image from "./img/partners/free-sticker-bear-4193249.png";
import telegramGetInTouchImage from "./img/get_in_touch/icons8-телеграм-3d-fluency-96.png";
import whatsappGetInTouchImage from "./img/get_in_touch/icons8-whatsapp-96.png";
import youtubeGetInTouchImage from "./img/get_in_touch/icons8-youtube-play-96.png";
import telFooterImage from "./img/footer_icons/telephone-svgrepo-com.svg";
import locationFooterImage from "./img/footer_icons/location-svgrepo-com.svg";
import emailFooterImage from "./img/footer_icons/email-svgrepo-com.svg";
import facebookFooterSocialImage from "./img/footer_social/facebook-svgrepo-com.svg";
import instagramFooterSocialImage from "./img/footer_social/instagram-2-1-logo-svgrepo-com.svg";
import okFooterSocialImage from "./img/footer_social/ok-ru-logo-svgrepo-com.svg";
import twitterFooterSocialImage from "./img/footer_social/social-twitter-svgrepo-com.svg";
import viberFooterSocialImage from "./img/footer_social/viber-svgrepo-com.svg";
import whatsappFooterSocialImage from "./img/footer_social/whatsapp-svgrepo-com.svg";
import youtubeFooterSocialImage from "./img/footer_social/youtube-svgrepo-com.svg";
import "./css/adaptive.css";
import StartModalWindow from "./StartModalWindow";

let AdaptivePage = () => {
  const [start, setStart] = React.useState(true);

  const closeModalWindow = () => {
    setStart(false);
  };

  return (
    <div className="wrapperAD">
      <header className="headerAD">
        <div className="ADheader__container _containerAD">
          <div className="ADheader__container_image">
            <img src={santaClausLogo} alt="santa-claus-logo" />
          </div>
          <nav className="ADheader__menu menuAD">
            <ul className="ADmenu__list">
              <li className="ADmenu__item">
                <span className="ADmenu__link">Home</span>
              </li>
              <li className="ADmenu__item">
                <span className="ADmenu__link"> About</span>
              </li>
              <li className="ADmenu__item">
                <span className="ADmenu__link">Presents</span>
              </li>
              <li className="ADmenu__item">
                <span className="ADmenu__link">Contacts</span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="pageAD">
        <div className="ADpage__main-block main-blockAD">
          <div className="ADmain-block__container _containerAD">
            <div className="ADmain-block__body">
              <h1 className="ADmain-block__title">Santa Claus website!</h1>
              <div className="ADmain-block__text">
                Happy New Year! Happiness and peace in every home!
              </div>
              <div className="ADmain-block__buttons">
                <button className="ADmain-block__button ADmain-block__button_orange">
                  Leave a message
                </button>
                <button className="ADmain-block__button ADmain-block__button_border">
                  Get a gift
                </button>
              </div>
            </div>
            <div className="ADmain-block__image _ibgAD">
              <img src={mainImage} alt="Main" />
            </div>
          </div>
        </div>
        <section className="ADpage__services servicesAD">
          <div className="ADservices__container _containerAD">
            <div className="ADservices__body">
              <div className="ADservices__column">
                <div className="ADservices__item item-serviceAD">
                  <div className="ADitem-service__icon">
                    <img src={services01Image} alt="Santa's house" />
                  </div>
                  <h3 className="ADitem-service__title">Santa's house</h3>
                  <div className="ADitem-service__text">
                    Look at the amazing beauty of the house!
                  </div>
                </div>
              </div>
              <div className="ADservices__column">
                <div className="ADservices__item item-serviceAD">
                  <div className="ADitem-service__icon">
                    <img src={services02Image} alt="Santa Claus" />
                  </div>
                  <h3 className="ADitem-service__title">Santa Claus</h3>
                  <div className="ADitem-service__text">
                    For all cooperation inquiries, click here...
                  </div>
                </div>
              </div>
              <div className="ADservices__column">
                <div className="ADservices__item item-serviceAD ADitem-service_green">
                  <div className="ADitem-service__icon">
                    <img src={services03Image} alt="Santa's sleigh" />
                  </div>
                  <h3 className="ADitem-service__title">Santa's sleigh</h3>
                  <div className="ADitem-service__text">
                    My transport. For logistics and supply, click here...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ADpage__advantages advantagesAD">
          <div className="ADadvantages__container _containerAD">
            <div className="ADadvantages__header header-blockAD">
              <h2 className="ADheader-block__title">Dwarf Team Achievements</h2>
              <div className="ADheader-block__sub-title">
                Our achievements would not have been <br />
                possible without our first-className team!
              </div>
            </div>
            <div className="ADadvantages__body">
              <div className="ADadvantages__column">
                <div className="ADadvantages__item">
                  <div className="ADadvantages__icon">
                    <img src={services04Image} alt="Cakes" />
                  </div>
                  <div className="ADadvantages__value">1565 +</div>
                  <div className="ADadvantages__text">Cakes</div>
                </div>
              </div>
              <div className="ADadvantages__column">
                <div className="ADadvantages__item">
                  <div className="ADadvantages__icon">
                    <img src={services05Image} alt="Cakes" />
                  </div>
                  <div className="ADadvantages__value">865 +</div>
                  <div className="ADadvantages__text">Mittens</div>
                </div>
              </div>
              <div className="ADadvantages__column">
                <div className="ADadvantages__item">
                  <div className="ADadvantages__icon">
                    <img src={services06Image} alt="Cakes" />
                  </div>
                  <div className="ADadvantages__value">3565 +</div>
                  <div className="ADadvantages__text">Toys</div>
                </div>
              </div>
              <div className="ADadvantages__column">
                <div className="ADadvantages__item">
                  <div className="ADadvantages__icon">
                    <img src={services07Image} alt="Cakes" />
                  </div>
                  <div className="ADadvantages__value">735 +</div>
                  <div className="ADadvantages__text">Beverages</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ADpage__presents presentsAD">
          <div className="ADpresents__container _containerAD">
            <div className="ADpresents__header header-blockAD">
              <h2 className="ADheader-block__title">Our gifts</h2>
              <div className="ADheader-block__sub-title">
                This year we will give a lot of smiles <br />
                and create a good mood!
              </div>
            </div>
            <div className="ADpresents__body">
              <div className="ADpresents__column">
                <article className="ADpresents__item item-presentsAD">
                  <div className="ADitem-presents__content">
                    <span className="ADitem-presents__link">
                      <h4 className="ADitem-presents__title">Fairy worlds</h4>
                    </span>
                    <div className="ADitem-presents__text">
                      Journey into the unknown, adventure and the vast expanses
                      of the universe...
                    </div>
                  </div>
                  <span className="ADitem-presents__image _ibgAD">
                    <img src={kosmosImage} alt="Cosmos" />
                  </span>
                </article>
              </div>
              <div className="ADpresents__column">
                <article className="ADpresents__item item-presentsAD">
                  <div className="ADitem-presents__content">
                    <span className="ADitem-presents__link">
                      <h4 className="ADitem-presents__title">
                        Inspirational music
                      </h4>
                    </span>
                    <div className="ADitem-presents__text">
                      This is what will help you find your Zen state in the new
                      year!
                    </div>
                  </div>
                  <span className="ADitem-presents__image _ibgAD">
                    <img src={gitaryImage} alt="Music" />
                  </span>
                </article>
              </div>
              <div className="ADpresents__column">
                <article className="ADpresents__item item-presentsAD">
                  <div className="ADitem-presents__content">
                    <span className="ADitem-presents__link">
                      <h4 className="ADitem-presents__title">
                        Amazing desserts
                      </h4>
                    </span>
                    <div className="ADitem-presents__text">
                      You will have to fight the temptation!
                    </div>
                  </div>
                  <span className="ADitem-presents__image _ibgAD">
                    <img src={macaronsImage} alt="Eat" />
                  </span>
                </article>
              </div>
              <div className="ADpresents__column">
                <article className="ADpresents__item item-presentsAD">
                  <div className="ADitem-presents__content">
                    <span className="ADitem-presents__link">
                      <h4 className="ADitem-presents__title">
                        Mind blowing games
                      </h4>
                    </span>
                    <div className="ADitem-presents__text">
                      Play, play and play again...
                    </div>
                  </div>
                  <span className="ADitem-presents__image _ibgAD">
                    <img src={pandyImage} alt="Game" />
                  </span>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="ADpage__about-me about-meAD">
          <div className="ADabout-me__container _containerAD">
            <div className="ADabout-me__header header-blockAD">
              <h2 className="ADheader-block__title">About me</h2>
              <div className="ADheader-block__sub-title">
                I am the one who makes the fairy <br />
                tale come true!
              </div>
            </div>
            <div className="ADabout-me__body">
              <div className="ADabout-me__video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/oNqRAvkXBYQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="ADabout-me__content">
                <div className="ADabout-me__top">
                  <h2 className="ADabout-me__title">A little where I'm from</h2>
                  <div className="ADabout-me__text">
                    A long time ago in the thirtieth kingdom... there once
                    lived... and so on...
                  </div>
                </div>

                <div className="ADabout-me__items">
                  <div className="ADabout-me__item item-about-meAD">
                    <div className="ADitem-about-me__icon">
                      <img src={santaClaus01About_meImage} alt="1840" />
                    </div>
                    <div className="ADitem-about-me__body">
                      <div className="ADitem-about-me__title">
                        Known (as Moroz Ivanovich) since 1840
                      </div>
                      <div className="ADitem-about-me__text">
                        For the first time I appear ...
                      </div>
                    </div>
                  </div>
                  <div className="ADabout-me__item item-about-meAD">
                    <div className="ADitem-about-me__icon">
                      <img src={santaClaus02About_meImage} alt="1840" />
                    </div>
                    <div className="ADitem-about-me__body">
                      <div className="ADitem-about-me__title">
                        Like Santa Claus since the late 1930s
                      </div>
                      <div className="ADitem-about-me__text">
                        In 1937, Father Frost and ...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="ADpage__clients clientsAD">
          <div className="ADclients__container _containerAD">
            <div className="ADclients__items">
              <div className="ADclients__item">
                <img src={clients01Image} alt="clients" />
              </div>
              <div className="ADclients__item">
                <img src={clients02Image} alt="clients" />
              </div>
              <div className="ADclients__item">
                <img src={clients03Image} alt="clients" />
              </div>
              <div className="ADclients__item">
                <img src={clients04Image} alt="clients" />
              </div>
              <div className="ADclients__item">
                <img src={clients05Image} alt="clients" />
              </div>
              <div className="ADclients__item">
                <img src={clients06Image} alt="clients" />
              </div>
            </div>
          </div>
        </div>
        <section className="ADpage__subscribe subscribeAD">
          <div className="ADsubscribe__container _containerAD">
            <div className="ADsubscribe__body">
              <h4 className="ADsubscribe__title">
                Subscribe For Latest Newsletter
              </h4>
              <form action="#" className="ADsubscribe__form">
                <input
                  autoComplete="off"
                  placeholder="Your Email"
                  type="email"
                  required
                  name="form[]"
                  className="ADsubscribe__input"
                />
                <button type="submit" className="ADsubscribe__button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="ADpage__get-in-touch get-in-touchAD">
          <div className="ADget-in-touch__container _containerAD">
            <div className="ADget-in-touch__header header-blockAD">
              <h2 className="ADheader-block__title">Get in touch</h2>
              <div className="ADheader-block__sub-title">
                To contact us, you can use <br />
                the following options
              </div>
            </div>
            <div className="ADget-in-touch__items">
              <div className="ADget-in-touch__item item-get-in-touchAD">
                <div className="ADitem-get-in-touch__icon">
                  <img src={telegramGetInTouchImage} alt="get-in-touch" />
                </div>
                <div className="ADitem-get-in-touch__emails">
                  <a
                    href="mailto:e.ageevets@yandex.ru"
                    className="ADitem-get-in-touch__email"
                  >
                    e.ageevets@yandex.ru
                  </a>
                  <a
                    href="mailto:santa__clouse@yandex.ru"
                    className="ADitem-get-in-touch__email"
                  >
                    santa__clouse@yandex.ru
                  </a>
                </div>
                <div className="ADitem-get-in-touch__label">Get Support</div>
                <button className="ADitem-get-in-touch__button">
                  Submit Request
                </button>
              </div>
              <div className="ADget-in-touch__item item-get-in-touchAD ADitem-get-in-touch_active">
                <div className="ADitem-get-in-touch__icon">
                  <img src={whatsappGetInTouchImage} alt="get-in-touch" />
                </div>
                <div className="ADitem-get-in-touch__emails">
                  <a
                    href="mailto:e.ageevets@yandex.ru"
                    className="ADitem-get-in-touch__email"
                  >
                    e.ageevets@yandex.ru
                  </a>
                  <a
                    href="mailto:santa__clouse@yandex.ru"
                    className="ADitem-get-in-touch__email"
                  >
                    santa__clouse@yandex.ru
                  </a>
                </div>
                <div className="ADitem-get-in-touch__label">Get Support</div>
                <button className="ADitem-get-in-touch__button">
                  Submit Request
                </button>
              </div>
              <div className="ADget-in-touch__item item-get-in-touchAD">
                <div className="ADitem-get-in-touch__icon">
                  <img src={youtubeGetInTouchImage} alt="get-in-touch" />
                </div>
                <div className="ADitem-get-in-touch__emails">
                  <a
                    href="mailto:e.ageevets@yandex.ru"
                    className="ADitem-get-in-touch__email"
                  >
                    e.ageevets@yandex.ru
                  </a>
                  <a
                    href="mailto:santa__clouse@yandex.ru"
                    className="ADitem-get-in-touch__email"
                  >
                    santa__clouse@yandex.ru
                  </a>
                </div>
                <div className="ADitem-get-in-touch__label">Get Support</div>
                <button className="ADitem-get-in-touch__button">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="ADpage__contact contactAD">
          <div className="ADcontact__container _containerAD">
            <div className="ADcontact__body">
              <div className="ADcontact__content">
                <h4 className="ADcontact__title">
                  Consulting Agency For Your Business
                </h4>
                <div className="ADcontact__text">
                  We offer gift delivery services for your children
                </div>
              </div>
              <button className="ADcontact__button">Contact Us</button>
            </div>
          </div>
        </section>
      </main>
      <footer className="footerAD">
        <div className="ADfooter__top">
          <div className="ADfooter__main _containerAD">
            <div className="ADfooter__row">
              <div className="ADfooter__column">
                <div className="ADfooter__label">Company Info</div>
                <nav className="ADfooter__menu menu-footerAD">
                  <ul className="ADmenu-footer__list">
                    <li className="ADmenu-footer__item">
                      <span className="ADmenu-footer__link">About Us</span>
                    </li>
                    <li className="ADmenu-footer__item">
                      <span className="ADmenu-footer__link">Carrier</span>
                    </li>
                    <li className="ADmenu-footer__item">
                      <span className="ADmenu-footer__link">We are hiring</span>
                    </li>
                    <li className="ADmenu-footer__item">
                      <span className="ADmenu-footer__link">Blog</span>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="ADfooter__column">
                <div className="ADfooter__label">Legal</div>
                <nav className="ADfooter__menu menu-footerAD">
                  <ul className="ADmenu-footer__list">
                    <li className="ADmenu-footer__item">
                      <span className="ADmenu-footer__link">About Us</span>
                    </li>
                    <li className="ADmenu-footer__item">
                      <span className="ADmenu-footer__link">Carrier</span>
                    </li>
                    <li className="ADmenu-footer__item">
                      <span className="ADmenu-footer__link">We are hiring</span>
                    </li>
                    <li className="ADmenu-footer__item">
                      <span className="ADmenu-footer__link">Blog</span>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="ADfooter__column">
                <div className="ADfooter__label">Features</div>
                <nav className="ADfooter__menu menu-footerAD">
                  <ul className="ADmenu-footer__list">
                    <li className="ADmenu-footer__item">
                      <span className="ADmenu-footer__link">About Us</span>
                    </li>
                    <li className="ADmenu-footer__item">
                      <span className="ADmenu-footer__link">Carrier</span>
                    </li>
                    <li className="ADmenu-footer__item">
                      <span className="ADmenu-footer__link">We are hiring</span>
                    </li>
                    <li className="ADmenu-footer__item">
                      <span className="ADmenu-footer__link">Blog</span>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="ADfooter__column">
                <div className="ADfooter__label">Resources</div>
                <nav className="ADfooter__menu menu-footerAD">
                  <ul className="ADmenu-footer__list">
                    <li className="ADmenu-footer__item">
                      <span className="ADmenu-footer__link">About Us</span>
                    </li>
                    <li className="ADmenu-footer__item">
                      <span className="ADmenu-footer__link">Carrier</span>
                    </li>
                    <li className="ADmenu-footer__item">
                      <span className="ADmenu-footer__link">We are hiring</span>
                    </li>
                    <li className="ADmenu-footer__item">
                      <span className="ADmenu-footer__link">Blog</span>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="ADfooter__column">
                <div className="ADfooter__label">Get In Touch</div>
                <nav className="ADfooter__menu menu-footerAD">
                  <ul className="ADmenu-footer__list">
                    <li className="ADmenu-footer__item item-contactAD">
                      <div className="ADitem-contact__img">
                        <img src={telFooterImage} alt="icons" />
                      </div>
                      <a href="tel:4805550103" className="ADitem-contact__link">
                        (480) 555-0103
                      </a>
                    </li>
                    <li className="ADmenu-footer__item item-contactAD">
                      <div className="ADitem-contact__img">
                        <img src={locationFooterImage} alt="icons" />
                      </div>
                      <span className="ADitem-contact__link">
                        4517 Washington Avenu
                      </span>
                    </li>
                    <li className="ADmenu-footer__item item-contactAD">
                      <div className="ADitem-contact__img">
                        <img src={emailFooterImage} alt="icons" />
                      </div>
                      <a
                        href="mailto:e.ageevets@yandex.ru"
                        className="ADitem-contact__link"
                      >
                        e.ageevets@yandex.ru
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="ADfooter__bottom">
          <div className="ADfooter__container _containerAD">
            <div className="ADfooter__copy">
              Made With Love By Figmaland All Right Reserved
            </div>
            <div className="ADfooter__social socialAD">
              <a
                href="https://facebook.com"
                target="_blank"
                className="ADsocial__item"
                rel="noreferrer"
              >
                <img src={facebookFooterSocialImage} alt="social" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="ADsocial__item"
                rel="noreferrer"
              >
                <img src={instagramFooterSocialImage} alt="social" />
              </a>
              <a
                href="https://ok.ru"
                target="_blank"
                className="ADsocial__item"
                rel="noreferrer"
              >
                <img src={okFooterSocialImage} alt="social" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="ADsocial__item"
                rel="noreferrer"
              >
                <img src={twitterFooterSocialImage} alt="social" />
              </a>
              <a
                href="https://viber.com"
                target="_blank"
                className="ADsocial__item"
                rel="noreferrer"
              >
                <img src={viberFooterSocialImage} alt="social" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                className="ADsocial__item"
                rel="noreferrer"
              >
                <img src={whatsappFooterSocialImage} alt="social" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                className="ADsocial__item"
                rel="noreferrer"
              >
                <img src={youtubeFooterSocialImage} alt="social" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {start && <StartModalWindow closeModalWindow={closeModalWindow} />}
    </div>
  );
};

AdaptivePage = React.memo(AdaptivePage);

export default AdaptivePage;
