const LinksList = ({ title, links }) => {
  const linksList = links.map((link, idx) => (
    <li key={idx}>
      <a href="/" className="section-footer__link">
        {link}
      </a>
    </li>
  ));

  return (
    <div className="section-footer__link-list">
      <h4 className="footer-title">{title}</h4>
      <ul className="section-footer__links">{linksList}</ul>
    </div>
  );
};

export default LinksList;
