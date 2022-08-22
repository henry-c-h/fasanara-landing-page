import './strategy.css';
import ceoPic from '../../assets/ceo-pic.webp';
import { ReactComponent as QuoteIcon } from '../../assets/quote-left-solid.svg';

const Strategy = () => {
  return (
    <div className="strategy-wrapper">
      <section className="section section-strategy">
        <div className="quote-container">
          <div className="quote-container__img-wrapper">
            <img
              className="quote-container__img"
              src={ceoPic}
              alt="CEO of Fasanara, Francesco Filia"
            />
            <QuoteIcon className="quote-container__icon" />
          </div>
          <div className="quote-container__text">
            <q className="quote-container__quote">
              Chaos brings opportunities to long-term oriented investors. The
              current difficult landscape is expanding the opportunity set for
              us.
            </q>
            <cite className="quote-container__cite">
              <span>Francesco Filia</span>
              Co-founder and CEO of Fasanara
            </cite>
          </div>
        </div>
        <h2 className="heading-secondary section-strategy__heading">
          Our investment strategies
        </h2>
        <div className="section-strategy__content">
          <div className="strategy-one">
            <p className="strategy-one__text">
              We pursue a range of diversified and highly sophisticated
              investment strategies that seek to profit from inefficiencies in
              the market structure. We focus on quant fintech investments,
              applying scientific approach to our investing. We use digital
              technology to build resilient portfolios.
            </p>
          </div>
          <div className="strategy-two">
            <ul className="strategy-two__links">
              <li>
                <a className="strategy-two__link" href="/">
                  <div className="strategy-two__link-title">
                    Fasanara Fintech
                    <span>&rarr;</span>
                  </div>
                  <p className="strategy-two__link-text">
                    Alternative Credit - Trade & Receivables Finance
                  </p>
                </a>
              </li>
              <li>
                <a className="strategy-two__link" href="/">
                  <div className="strategy-two__link-title">
                    Fasanara Quant
                    <span>&rarr;</span>
                  </div>
                  <p className="strategy-two__link-text">
                    Multi-strategy hedge fund
                  </p>
                </a>
              </li>
              <li>
                <a className="strategy-two__link" href="/">
                  <div className="strategy-two__link-title">
                    Fasanara Digital
                    <span>&rarr;</span>
                  </div>
                  <p className="strategy-two__link-text">
                    Institutional Investing in Crypto Assets
                  </p>
                </a>
              </li>
              <li>
                <a className="strategy-two__link" href="/">
                  <div className="strategy-two__link-title">
                    Fasanara Ventures
                    <span>&rarr;</span>
                  </div>
                  <p className="strategy-two__link-text">
                    New Technologies Co-Investments
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Strategy;
