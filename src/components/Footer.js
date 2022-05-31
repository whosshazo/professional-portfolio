import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? { display: "none" } : {}}>
    <ul className="icons">
      <li>
        <a
          href="https://www.linkedin.com/in/ryan-deshazo/"
          className="icon fa-linkedin"
        ></a>
      </li>
      <li>
        <a href="https://github.com/whosshazo" className="icon fa-github"></a>
      </li>
    </ul>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
