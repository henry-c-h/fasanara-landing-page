import './latest.css';
import latestImg1 from '../../assets/latest-1.jpeg';
import latestImg2 from '../../assets/latest-2.jpeg';
import latestImg3 from '../../assets/latest-3.jpeg';
import LatestCard from './LatestCard';

const Latest = () => {
  return (
    <div className="latest-wrapper">
      <section className="section section-latest">
        <h2 className="heading-secondary section-latest__heading">
          Latest from Fasanara
        </h2>
        <div className="section-latest__container">
          <LatestCard
            img={latestImg2}
            alt="Gold bitcoin coin on background of growth chart"
            date="August 5th, 2022"
            title="Fasanara Intelligence"
            text="BlackRockXCoinbase, Time to Build & Invest, Fintech Recruitment 2022, Crypto Regulation & More"
            label="Blog"
          />
          <LatestCard
            img={latestImg1}
            alt="Gold bitcoin coin on background of growth chart"
            date="July 4th, 2022"
            title="The N@ked Short Club"
            text="Resonance FM: The Naked Short Club interviews with Fasanara Capital.
            We talked about the two trends in finance: Fintech and Crypto."
            label="Podcast"
          />
          <LatestCard
            img={latestImg3}
            alt="New Bond Street in London"
            date="May 11th, 2022"
            title="Funding News"
            text="Press release of our Fasanara VCIII announcement covered by The Block, the leading global information service about Crypto and Blockchain. "
            label="Press"
          />
        </div>
      </section>
    </div>
  );
};

export default Latest;
