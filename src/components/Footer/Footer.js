import './footer.css';
import LinksList from './LinksList';
import logo from '../../assets/fasanara-logo-full.webp';
import PRILogo from '../../assets/footer-PRI.webp';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <section className="section section-footer">
        <div className="section-footer__wrapper">
          <div className="section-footer__one">
            <img
              className="section-footer__logo"
              src={logo}
              alt="Fasanara logo"
            />
            <div className="section-footer__quote">
              <p>
                "Learn how to see. Realize that everything connects to
                everything else." &#45; Leonardo da Vinci
              </p>
            </div>
            <div className="section-footer__address">
              <h4 className="section-footer__address-title">Headquarters</h4>
              <p>40 New Bond Street, London W1S 2RX</p>
              <p>Tel: 02034302482</p>
              <p>Email: investors@fasanara.com</p>
            </div>
            <div className="section-footer__awards">
              <img
                className="section-footer__img"
                src={PRILogo}
                alt="Principles for Responsible Investment logo"
              />
            </div>
          </div>
          <div className="section-footer__two">
            <LinksList
              title="Our firm"
              links={['About us', 'News', 'ESG', 'Events', 'Media', 'Contact']}
            />
            <LinksList
              title="Investment"
              links={['Fintech', 'Quant', 'Digital', 'Ventures']}
            />
            <LinksList
              title="Insights"
              links={['Fintech Blog', 'VC Blog', 'Podcast', 'Perspectives']}
            />
            <LinksList title="Careers" links={['Our team', 'Open roles']} />
          </div>
        </div>
        <div className="section-footer__legal">
          <p>All rights reserved © Fasanara Capital Ltd 2022</p>
          <ul className="section-footer__legal-links">
            <li>
              <a className="section-footer__link legal-link" href="/">
                Disclaimer
              </a>
            </li>
            <li>
              <a className="section-footer__link legal-link" href="/">
                Privacy policy
              </a>
            </li>
            <li>
              <a className="section-footer__link legal-link" href="/">
                Browsing and Cookies
              </a>
            </li>
            <li>
              <a className="section-footer__link legal-link" href="/">
                Pillar 3 Disclosure
              </a>
            </li>
          </ul>
          <div className="section-footer__icons">
            <a href="https://www.linkedin.com/company/fasanara-capital/">
              <LinkedinIcon
                style={{ fill: '#f7f7f7' }}
                className="footer-icon"
              />
            </a>
            <a href="https://twitter.com/FasanaraCapital">
              <TwitterIcon
                style={{ fill: '#f7f7f7' }}
                className="footer-icon"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
