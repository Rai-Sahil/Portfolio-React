import "./HomePage.css";
import downButton from "../../Image/down-button.svg";
import myImage from "../../Image/my-main-pic.png";
import { useEffect, useState } from "react";

const textLoad = () => {
  setTimeout(() => {
    return 'Web Developer'
  }, 0)
  setTimeout(() => {
    return 'Machine Learning'
  }, 4000)
  setTimeout(() => {
    return 'Software Developer'
  }, 8000)
}

const HomePage = () => {

  return (
    <div className="home-page">
      <div class="typing-text">MACHINE LEARNING</div>

      <header className="headings">
        <h1 className="sahil-rai-heading">Sahil Rai</h1>
      </header>

      <div className="my-bio-container">
        <div className="my-bio">
          <h4 className="greetings-text">Greetings 👋</h4>
          <span className="my-bio1">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit. Lorem ipsum dolor sit amet,{" "}
          </span>
          <span className="my-bio2">consectetur</span>
          <span className="my-bio3">
            <br />
            adipiscing
          </span>
          <span className="my-bio4">
            {" "}
            elit.
            <br />
          </span>
          <span className="my-bio5">
            Lorem ipsum dolor sit amet.
            <br />
          </span>
          <button className="download-button">
            <h4 className="download-cv-text">Download CV</h4>
          </button>
        </div>
      </div>

      <img src={myImage} alt="" className="image-overlay" />

      <div className="line-container-parent">
        <div class="line-container-child">
          <div className="left-line" />
          <img
            className="circular-button"
            src={downButton}
            alt="Click me to go down"
          />
          <div className="right-line" />
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home-page">
      <div class="typing-text">MACHINE LEARNING</div>

      <header className="headings">
        <h1 className="sahil-rai-heading">Sahil Rai</h1>
      </header>

      <p className="my-bio-line">
        I <span className="color-text">design</span> and <span className="color-text">code</span> beautifully simple things, and I love what I do.
      </p>

      <div className="pic-and-button">
        <div className="pic">
          <img src={ myImage } alt='My Pic' className="my-main-pic"/>
        </div>
        <div className="download-cv-button">
          <p>Download CV</p>
        </div>
      </div>

      <div className="line-container-parent">
        <div class="line-container-child">
          <div className="left-line" />
          <img
            className="circular-button"
            src={downButton}
            alt="Click me to go down"
          />
          <div className="right-line" />
        </div>
      </div>
    </div>
  )
}

export default Home;
