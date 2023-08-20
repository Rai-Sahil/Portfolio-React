import "./HomePage.css";
import downButton from "../../Image/down-button.svg";
import myImage from "../../Image/my-main-pic.png";
import { useRef } from "react";

const handleDownloadClick = () => {
  const pdfPatf = '/Users/sahilrai/Downloads/Resume.pdf'

  const link = document.createElement('a')
  link.href = pdfPatf
  link.target = '_blank'
  link.download = 'Resume.pdf'

  link.dispatchEvent(new MouseEvent('click'))
}

const Home = () => {

  return (
    <div className="home-page">
      <div className="background-text">
        <div class="typing-text">SOFTWARE DEVELOPER</div>
      </div>

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
        <button className="download-cv-button" onClick={ handleDownloadClick }>
          <p>Download CV</p>
        </button>
      </div>

      <div className="line-container-parent">
        <div class="line-container-child">
          <div className="left-line" />
          <img
            className="circular-button"
            src={ downButton }
            alt="Click me to go down"
          />
          <div className="right-line" />
        </div>
      </div>
    </div>
  )
}

export default Home;
