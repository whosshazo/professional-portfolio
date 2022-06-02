import PropTypes from "prop-types";
import React from "react";
import pic01 from "../images/pic01.jpg";
import pic02 from "../images/pic02.jpg";
import pic03 from "../images/pic03.jpg";
import pic04 from "../images/sk8spot.png";
import pic05 from "../images/pic05.png";
import pic06 from "../images/cocky-cocktails.png";
import resume from "../assets/Ryan-DeShazo-Resume.pdf";

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <article
          id="intro"
          className={`${this.props.article === "intro" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic01} alt="skateboarding pic" />
          </span>
          <p>
            Hi, my name is Ryan. I am a front-end web developer influenced by my
            experience in high-speed photography and multimedia, with a desire
            to build a more intuitive, user-friendly experience on the web. I
            earned my certificate in full-stack development from the University
            of Richmond Coding Bootcamp in May 2022. My newly developed skills
            in JavaScript, CSS, React.js, MongoDB, and responsive web design
            with Bootstrap and similar libraries help me combine my technical
            and creative abilities in an agile work environment. While working
            on a recent project, I applied aspects of UX/UI to design a
            single-page MERN app that helps local musicians and venues host
            shows for events, all from their fingertips on our mobile-first
            configuration. I am excited to leverage my skills with a
            cross-functional team to build better experiences and improve
            software solutions on the web.
          </p>
          <p>
            In my free time I love spending time with my wife and two amazing
            children, skateboarding, and working on old cars. My family gives me
            the motivation to constistantly stay focused and driven in life.
          </p>

          <p>
            If you have a second, check out my <a href="#work">awesome work</a>.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === "work" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic05} alt="House Show home page" />
          </span>
          <h3>House Show</h3>
          <p>
            Fullstack: MERN | PWA | Bootstrap
            <br></br>
            Deployed:
            <a href="https://house-show.herokuapp.com/"> House Show</a>
            <br></br>
            GitHub:
            <a href="https://github.com/Haguermeister/house-show">
              {" "}
              Check it out
            </a>
          </p>

          <span className="image main">
            <img src={pic04} alt="Sk8Spotter main page" />
          </span>
          <h3>Sk8 Spotter</h3>
          <p>
            Fullstack: Handlebars | CSS | JavaScript | Sequelize | Bootstrap |
            Express | Node | NPM
            <br></br>
            Deployed:{" "}
            <a href="https://sk8spotter.herokuapp.com/login"> Sk8 Spotter</a>
            <br></br>
            GitHub:{" "}
            <a href="https://github.com/sora64/sk8spotter"> Check it out</a>
          </p>

          <span className="image main">
            <img src={pic06} alt="" />
          </span>
          <h3>Cocky Cocktails</h3>
          <p>
            Frontend: HTML | CSS | JavaScript | Bulma
            <br></br>
            Deployed:{" "}
            <a href="https://whosshazo.github.io/cocktail-project/">
              {" "}
              Cocky Cocktails
            </a>
            <br></br>
            GitHub:{" "}
            <a href="https://github.com/whosshazo/cocktail-project">
              {" "}
              Check it out
            </a>
          </p>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === "about" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Resume</h2>
          <button>
            <a
              href={resume}
              download="RyanDeShazoResume"
              style={{ borderBottom: "none" }}
            >
              Download.
            </a>
          </button>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === "contact" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {/* <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul> */}
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
