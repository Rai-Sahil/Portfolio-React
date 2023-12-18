import "./HomePage.css";
import downButton from "../../Image/down-button.svg";
import myImage from "../../Image/my-main-pic.png";
import Typewriter from 'typewriter-effect';

const handleDownloadClick = () => {
  const pdfPatf = '/Users/sahilrai/Downloads/Resume.pdf'

  const link = document.createElement('a')
  link.href = pdfPatf
  link.target = '_blank'
  link.download = 'Resume.pdf'

  link.dispatchEvent(new MouseEvent('click'))
}

const handleScrollDown = () => {
  const start = window.pageYOffset; // Initial scroll position
  const end = window.innerHeight; // Target scroll position

  const duration = 1000; // Duration of the scroll animation in milliseconds
  const startTime = performance.now();

  function scrollAnimation(currentTime) {
    const elapsedTime = currentTime - startTime;
    const scroll = easeInOut(elapsedTime, start, end - start, duration);
    window.scrollTo(0, scroll);
    if (elapsedTime < duration) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  function easeInOut(t, b, c, d) {
    // Easing function (optional, provides smoother animation)
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(scrollAnimation);
};

const Home = () => {

  return (
    <div className="home-page">
      <div className="background-text">
        <div class="typing-text">
          <Typewriter className="typewriter"
            options={{
              strings: ["SOFTWARE DEVELOPER", "WEB DEVELOPER"],
              autoStart: true,
              loop: true,
            }}></Typewriter>
        </div>
      </div>

      <header className="headings">
        <h1 className="sahil-rai-heading">Sahil Rai</h1>
      </header>

      <p className="my-bio-line">
        I <span className="color-text">design</span> and <span className="color-text">code</span> beautifully simple things, and I love what I do.
      </p>

      <div className="pic-and-button">
        <div className="pic">
          <img src={myImage} alt='My Pic' className="my-main-pic" />
        </div>
        <button className="download-cv-button" onClick={handleDownloadClick}>
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
            onClick={ handleScrollDown }
          />
          <div className="right-line" />
        </div>
      </div>
    </div>
  )
}

export default Home;
