import './responsibility.css';

const Responsibility = () => {
  return (
    <div className="responsibility-wrapper">
      <section className="section section-responsibility">
        <div className="responsibility-container">
          <h2 className="heading-secondary responsibility-container__title">
            Our effort in ESG
          </h2>
          <p className="responsibility-container__text">
            Fasanara has established an internal operations group responsible
            for the review of ESG policies, assessment of investments and
            reporting to stakeholders.
          </p>
          <p className="responsibility-container__text">
            We strongly believe that we have a moral obligation to play a role
            in making the world a better place through responsible investing and
            that incorporating environmental, social and governance (ESG)
            considerations in its business decisions is essential to creating
            value for its stakeholders.
          </p>
          <a href="/" className="btn btn--dark">
            Read more &rarr;
          </a>
        </div>
      </section>
    </div>
  );
};

export default Responsibility;
