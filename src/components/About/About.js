import { useState } from 'react';
import './about.css';
import StatsCard from './StatsCard';
import video from '../../assets/company-video.mp4';

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoClick = () => {
    setIsVideoOpen((prev) => !prev);
  };

  return (
    <div className="about-wrapper">
      <section className="section section-about">
        <div className="stats-container">
          <StatsCard stat={3.5} text="AUM" isFloat={true} />
          <StatsCard stat={4} text="investment strategies" />
          <StatsCard stat={120} text="employees" hasPlusSign={true} />
          <StatsCard
            stat={10}
            text="years of investment experience"
            hasPlusSign={true}
          />
        </div>
        <h2 className="heading-secondary section-about__heading">
          Our mission
        </h2>
        <p className="section-about__text">
          Fasanara Capital is an independent, owner-managed alternative asset
          management company authorized and regulated by the Financial Conduct
          Authority. Co-founded by Francesco Filia in 2011, Fasanara is based in
          London with alliance offices in Milan. We offer access to a range of
          inventive multi-asset capacity-constrained niche products.
        </p>
        <div className="section-about__buttons">
          <a href="/" className="btn btn--dark">
            Learn more
          </a>
          <button className="btn btn--dark" onClick={handleVideoClick}>
            {isVideoOpen ? 'Close video' : 'Watch video'}
          </button>
        </div>
        {isVideoOpen ? (
          <div className="video-container">
            <video className="company-video" autoPlay controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default About;
