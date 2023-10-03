import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import Switch from "@mui/material/Switch";

function HeaderLink({ title, path }) {
  return (
    <li className="header__li">
      <Link className="header__link" to={path}>
        {title}
      </Link>
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
