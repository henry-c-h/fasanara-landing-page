import './navbar.css';
import logoImage from '../../assets/fasanara-logo-small.webp';
import { ReactComponent as NavIcon } from '../../assets/bars-solid.svg';

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">
          <img
            className="header__logo-img"
            src={logoImage}
            alt="Fasanara logo"
          />
        </a>
        <p className="header__logo-text">Fasanara Capital</p>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li>
            <a className="header__nav-link" href="/">
              Company
            </a>
          </li>
          <li>
            <a className="header__nav-link" href="/">
              Investment approach
            </a>
          </li>
          <li>
            <a className="header__nav-link" href="/">
              ESG
            </a>
          </li>
          <li>
            <a className="header__nav-link" href="/">
              Media
            </a>
          </li>
          <li>
            <a className="header__nav-link" href="/">
              Insights
            </a>
          </li>
        </ul>
        <NavIcon className="mobile-nav" />
      </nav>
    </header>
  );
};

export default Navbar;
