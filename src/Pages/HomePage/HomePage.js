import './HomePage.css'
import downButton from '../../Image/down-button.svg'

const HomePage = () => {
    
    return (
        <div className='home-page'>
            <header className='headings'>
                <h1 className='sahil-rai-heading'>Sahil Rai</h1>
            </header>

            <div className='my-bio-container'>
                <div className='my-bio'>
                    <h4 className='greetings-text'>Greetings 👋</h4>
                    <span className='my-bio1'>Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit. Lorem ipsum dolor sit amet, </span>
                    <span className='my-bio2'>consectetur</span>
                    <span className='my-bio3'><br />adipiscing</span>
                    <span className='my-bio4'> elit.<br /></span>
                    <span className='my-bio5'>Lorem ipsum dolor sit amet.<br /></span>
                    <button className='download-button'>
                        <h4 className='download-cv-text'>Download CV</h4>
                    </button>
                </div>
                <div className='my-image-container'>
                    {/* <h1 className='work-title'>WEB<br />DEVELOPER</h1> */}
                    
                </div>
            </div>

            <div className='line-container-parent'>
                <div class="line-container-child">
                    <div className="left-line" />
                    <img className='circular-button' src={ downButton } alt='Click me to go down' />
                    <div className='right-line' />
                </div>
            </div>
        </div>
    );
}

export default HomePage;