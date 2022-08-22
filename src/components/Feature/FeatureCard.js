const FeatureCard = ({ title, text, img, imgAlt, index, activeIndex }) => {
  const styles = {
    transform: `translateX(${
      120 * (index - activeIndex) - 48
    }%) translateY(-50%)`,
  };

  return (
    <div className="feature-card" style={styles}>
      <div className="feature-card__img-container">
        <img className="feature-card__img" src={img} alt={imgAlt} />
      </div>
      <div className="feature-card__content">
        <p className="feature-card__title">{title}</p>
        <p className="feature-card__text">{text}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
