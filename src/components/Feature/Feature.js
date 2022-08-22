import './feature.css';
import FeatureCard from './FeatureCard';
import investmentImg from '../../assets/feature-investment.jpeg';
import riskImg from '../../assets/feature-risk.jpeg';
import clientImg from '../../assets/feature-client.jpeg';
import techImg from '../../assets/feature-tech.jpeg';
import { useState } from 'react';

const Feature = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleLeftArrowClick = () => {
    setActiveIndex((prev) => (prev === 1 ? 4 : prev - 1));
  };

  const handleRightArrowClick = () => {
    setActiveIndex((prev) => (prev === 4 ? 1 : prev + 1));
  };

  return (
    <div className="feature-wrapper">
      <section className="section section-features">
        <h2 className="heading-secondary section-features__heading">Our DNA</h2>
        <div className="feature-container">
          <FeatureCard
            title="investment expertise"
            text="The Investment team’s expertise spans across a wide array of asset classes. Our unique investment approach allows for greater independence and flexibility."
            img={investmentImg}
            alt="Low angle view of London skyline"
            index={1}
            activeIndex={activeIndex}
          />
          <FeatureCard
            title="prudent risk management"
            text="Fasanara has developed a tailored-made risk management framework adapted to its unique investment strategy. A dedicated team of people oversees this part of the investment process."
            img={riskImg}
            alt="Man standing in front of monitor showing financial data"
            index={2}
            activeIndex={activeIndex}
          />
          <FeatureCard
            title="client focus"
            text="Fasanara delivers a highly customised service to a diversified investor base, thus striving to fulfil clients’ needs with opportunistic vehicles and quantitative investment solutions."
            img={clientImg}
            alt="Women sitting in a meeting room"
            index={3}
            activeIndex={activeIndex}
          />
          <FeatureCard
            title="scaling up through technology"
            text="New Algos: quick to implement and useful in diversifying the portfolio strategies, managing the strategies portfolios through our ML infrastructure.
            "
            img={techImg}
            alt="Low angle view of London skyline"
            index={4}
            activeIndex={activeIndex}
          />
          <button
            className="feature-container__arrow feature-container__arrow--left"
            onClick={handleLeftArrowClick}
          >
            &larr;
          </button>
          <button
            className="feature-container__arrow feature-container__arrow--right"
            onClick={handleRightArrowClick}
          >
            &rarr;
          </button>
        </div>
        <div className="section_features__dots">
          <button
            className={`${activeIndex === 1 ? 'dot dot--active' : 'dot'}`}
            onClick={() => setActiveIndex(1)}
          >
            &nbsp;
          </button>
          <button
            className={`${activeIndex === 2 ? 'dot dot--active' : 'dot'}`}
            onClick={() => setActiveIndex(2)}
          >
            &nbsp;
          </button>
          <button
            className={`${activeIndex === 3 ? 'dot dot--active' : 'dot'}`}
            onClick={() => setActiveIndex(3)}
          >
            &nbsp;
          </button>
          <button
            className={`${activeIndex === 4 ? 'dot dot--active' : 'dot'}`}
            onClick={() => setActiveIndex(4)}
          >
            &nbsp;
          </button>
        </div>
      </section>
    </div>
  );
};

export default Feature;
