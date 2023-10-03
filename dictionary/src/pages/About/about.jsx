import React, { Fragment } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import "./about.scss";
function About() {
  return (
    <Fragment>
      <div className="about__wrapper">
        <main className="about__main">
          <h2>Зайко Евгений Иванович</h2>
          <div className="about__content">
            <div className="AboutMe">
              <h2>About me</h2>
              <ul className="AboutMe__list">
                <li className="AboutMe__item">
                  Образование: Учитель математики и информатики
                </li>
                <li className="AboutMe__item">
                  Ментор в
                  <a className="header__link" href="https://rs.school/">
                    RS School
                  </a>
                </li>
                <li className="AboutMe__item">
                  проходил службу в 2015-2016 в ВС РБ
                </li>
              </ul>
            </div>
            <div className="contacts">
              <ul className="contacts__list header__ul">
                <h2>Contacts</h2>
                <li className="contacts__item header__li">
                  <a href="tel:+375257810998">Call me</a> or +375 (25) 781-09-98
                </li>
                <li className="contacts__item header__li">
                  <a
                    href="https://www.linkedin.com/in/rahunak/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="contacts__item header__li">
                  <a
                    href="https://github.com/rahunak"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Git
                  </a>
                </li>
                <li className="contacts__item header__li">
                  <a
                    href="https://t.me/smallRabbit66"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Teltegram
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
