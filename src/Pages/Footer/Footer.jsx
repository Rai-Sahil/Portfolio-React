import './Footer.css'
import githubIcon from '../../Image/github.png'
import discordIcon from '../../Image/discord.png'
import slackIcon from '../../Image/slack.png'
import linkedinIcon from '../../Image/linkedin.png'
import mailImage from '../../Image/mail.svg'
import phoneImage from '../../Image/telephone.svg'
import addressImage from '../../Image/Address.svg'

const Footer = () => {
    
    return (
        <footer className='footer-container'>
            <h1 className='footer-heading'>
                <p className='text1'>And that's a wrap!</p>
                <p className='text2'>Piqued your interest?</p>
                <p className='text3'>Just holler!</p>
            </h1>

            <div className='footer-description'>
                <h2 className='footer-name'>Sahil Rai</h2>
                <div className='footer-content'>Passionate about leveraging technology to innovate and create meaningful solutions. Constantly exploring the <br /> intersections of code, creativity, and problem-solving to make an impact in the digital realm... <span className='read-more'>Read More</span></div>
            </div>
            <div className='social-links'>
                <a href='' ><img src={ githubIcon } alt=''/></a>
                <a href='' > <img src={ discordIcon } alt=''/></a>
                <a href='' ><img src={ slackIcon } alt=''/></a>
                <a href='' ><img src={ linkedinIcon } alt=''/></a>
            </div>

            <div className='contact-container'>
                <div className='contact-card'>
                    <img src={ phoneImage } alt='phone image' className='contact-image'/>
                    <p className='card-content'>
                        <div className='contact-card-heading'>Phone</div>
                        <div className='contact-card-description'>(236) 858-9811</div>
                    </p>
                </div>
                <div className='contact-card'>
                    <img src={ mailImage } alt='phone image' className='contact-image'/>
                    <p className='card-content'>
                        <div className='contact-card-heading'>Mail</div>
                        <div className='contact-card-description'>raisahil580@gmail.com</div>
                    </p>
                </div>
                <div className='contact-card'>
                    <img src={ addressImage } alt='phone image' className='contact-image'/>
                    <p className='card-content'>
                        <div className='contact-card-heading'>Address</div>
                        <div className='contact-card-description'>Delta BC, Canada</div>
                    </p>
                </div>
            </div>
            <p className='copyright'>&copy; 2023 Sahil Rai. All rights reserved.</p>
        </footer>
    )
}

export default Footer