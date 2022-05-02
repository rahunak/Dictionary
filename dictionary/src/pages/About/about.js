import React, { Fragment } from "react";
import "./about.scss";
function About() {
  return (
    <Fragment >
      <div className="about__wrapper">
        <main className="about__main">
          <h1>Зайко Евгений Иванович</h1>
          <div className="about__content">

            <div className="AboutMe">
              <h2>About me</h2>
              <ul className="AboutMe__list">
                <li className="AboutMe__item">Образование: Учитель математики и информатики</li>
                <li className="AboutMe__item">Мужчина 29 лет</li>
                <li className="AboutMe__item">проходил службу в 2015-2016 в ВС РБ </li>
              </ul>
            </div>
            <div className="contacts">
              <ul className="contacts__list">
                <h2>Contacts</h2>
                <li className="contacts__item">
                  <a href="tel:+375257810998" >Call me</a> or +375 (25) 781-09-98
                </li>
                <li className="contacts__item"><a href="https://www.linkedin.com/in/rahunak/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                <li className="contacts__item">
                  <a href="https://github.com/rahunak" target="_blank" rel="noopener noreferrer">Git</a>
                </li>
                <li className="contacts__item">
                  <a href="https://t.me/smallRabbit66" target="_blank" rel="noopener noreferrer">Teltegram</a>
                </li>
              </ul>
            </div>


            <div className="lastProjects">
              <h2>Last projects</h2>
              <ul className="lastProjects__list">
                <li className="lastProjects__item">
                  <a href="https://rolling-scopes-school.github.io/rahunak-JSFE2022Q1/SHELTER/index.html"
                    target="_blank" rel="noopener noreferrer">
                    Shelter
                  </a>
                </li>
                <li className="lastProjects__item">
                  <a href=" https://rahunak.github.io/note-editor"
                    target="_blank" rel="noopener noreferrer">
                    Note Editor
                  </a>
                </li>
                <li className="lastProjects__item">
                  <a href="  https://rahunak.github.io/calculator/"
                    target="_blank" rel="noopener noreferrer">
                    Calculator
                  </a>
                </li>
                <li className="lastProjects__item">
                  <a href="https://rahunak.github.io/advice/"
                    target="_blank" rel="noopener noreferrer">
                    Advice
                  </a>
                </li>
                <li className="lastProjects__item">
                  <a href="https://rahunak.github.io/nft-preview-card-component-main/"
                    target="_blank" rel="noopener noreferrer">
                    NFT
                  </a>
                </li>
                <li className="lastProjects__item">
                  <a href="https://rahunak.github.io/qr-code-component/"
                    target="_blank" rel="noopener noreferrer">
                    Qr-Code
                  </a>
                </li>
                <li className="lastProjects__item">
                  <a href="https://rahunak.github.io/order-summary-component-main"
                    target="_blank" rel="noopener noreferrer">
                    Order card
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>

      </div>

    </Fragment>
  );
}
export default About;