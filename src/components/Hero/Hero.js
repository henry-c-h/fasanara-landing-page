import './hero.css';
// import backgroundVideo from '../../assets/background.mp4';
import backgroundVideo from '../../assets/hero-video.mp4';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef();
  const playbackRate = 1;

  useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  });

  return (
    <section className="section-hero">
      <div className="bg-video">
        <video ref={videoRef} className="bg-video__content" autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your broswer is not supported.
        </video>
      </div>
      <div className="section-hero__message">
        <h1 className="heading-primary section-hero__title">
          We are investing in a digital future
        </h1>
        <p className="section-hero__text">
          We embrace fintech and digital revolutions in response to today’s
          transformational markets.
        </p>
      </div>
      <a href="/" className="btn btn--light btn--hero">
        Explore our insights
      </a>
    </section>
  );
};

export default Hero;
