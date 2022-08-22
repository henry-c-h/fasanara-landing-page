const LatestCard = ({ img, alt, date, title, text, label }) => {
  return (
    <div className="section-latest__card">
      <div className="section-latest__card-one">
        <img src={img} alt={alt} className="section-latest__img" />
      </div>
      <div className="section-latest__card-two">
        <p className="section-latest__card-date">{date}</p>
        <p className="section-latest__card-title">{title}</p>
        <p className="section-latest__card-text">{text}</p>
        <a href="/" className="btn btn--dark btn--small">
          Read more
        </a>
      </div>
      <div className="section-latest__label">{label}</div>
    </div>
  );
};

export default LatestCard;
