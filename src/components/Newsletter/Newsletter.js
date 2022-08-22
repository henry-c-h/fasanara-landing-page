import './newsletter.css';

const Footer = () => {
  return (
    <div className="newsletter-wrapper">
      <section className="section section-newsletter">
        <div className="newsletter">
          <h2 className="heading-secondary">Stay in touch with Fasanara</h2>
          <p className="newsletter__text">
            Sign up for our newsletter to get our latest insights, news and
            events
          </p>
          <form className="newsletter__form">
            <input
              className="newsletter__input"
              type="email"
              placeholder="Enter your email"
            />
            <button
              className="btn btn--light btn--signup"
              onClick={(e) => e.preventDefault()}
            >
              Sign up
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Footer;
