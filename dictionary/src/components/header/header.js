import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import Switch from "@mui/material/Switch";

function HeaderLink(props) {
  let { title, path } = props;
  return (
    <li className="header__li">
      <NavLink {...props} className="header__link" to={path} activeclassname='active'>
        {title}
      </NavLink>
    </li>
  );
}
function Header() {
  const label = { inputProps: { "aria-label": "Switch burger menu" } };

  let [isOpen, setIsOpen] = useState(true);

  let paths = [
    { title: "Home", path: "/" },
    { title: "Dictionary", path: "dictionary" },
    { title: "About", path: "about" },
  ];
  function changeIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <header className={`header ${isOpen ? "open" : "closed"}`}>
      <nav className="header__nav">
        <div className="logo" onClick={changeIsOpen}>
          <h1>Zaiko</h1>
          <Switch {...label} defaultChecked color="secondary" />
        </div>
        <ul className="header__ul">
          {paths.map((link, index) => (
            <HeaderLink
              key={link.path + link.title + index}
              title={link.title}
              path={link.path}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
