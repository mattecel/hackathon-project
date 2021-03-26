import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/Group.png";
import arrow from "../../assets/icons/arrow.svg";

const Footer = () => {
  return (
    <section className="footContainer">
      <footer className="footer">
        <Link to="/" className="logo">
          <img src={logo} alt="" className="logo__image" />
          <h1 className="logo__title">Fast Track</h1>
        </Link>

        <ul className="foot-links">
          <li className="foot-links__item">
            <Link className="foot-links__item__links" to="/">
              Privacy
            </Link>
          </li>
          <li className="foot-links__item">
            <Link className="foot-links__item__links" to="/">
              Terms
            </Link>
          </li>
          <li className="foot-links__item">
            <Link className="foot-links__item__links" to="/">
              About
            </Link>
          </li>
        </ul>

        <Link to="/" className="language">
          <p className="language__blurb">United States - English</p>
          <img className="language__icon" src={arrow} alt="" />
        </Link>
      </footer>
    </section>
  );
};

export default Footer;
