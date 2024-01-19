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
                <a href='https://github.com/Rai-Sahil' ><img src={ githubIcon } alt='GitHub'/></a>
                <a href='https://discordapp.com/users/742932232662024212' > <img src={ discordIcon } alt='Discord'/></a>
                <a href='https://sahilrai.slack.com/team/U067HSPCNQ6' ><img src={ slackIcon } alt='Slack'/></a>
                <a href='https://www.linkedin.com/in/rai-sahil/' ><img src={ linkedinIcon } alt='LinkedIn'/></a>
            </div>

            <div className='contact-container'>
                <div className='contact-card'>
                    <img src={ phoneImage } alt='phone' className='contact-image'/>
                    <p className='card-content'>
                        <div className='contact-card-heading'>Phone</div>
                        <div className='contact-card-description'>(236) 858-9811</div>
                    </p>
                </div>
                <div className='contact-card'>
                    <img src={ mailImage } alt='mail' className='contact-image'/>
                    <p className='card-content'>
                        <div className='contact-card-heading'>Mail</div>
                        <div className='contact-card-description'>raisahil580@gmail.com</div>
                    </p>
                </div>
                <div className='contact-card'>
                    <img src={ addressImage } alt='address' className='contact-image'/>
                    <p className='card-content'>
                        <div className='contact-card-heading'>Address</div>
                        <div className='contact-card-description'>Delta BC, Canada</div>
                    </p>
                </div>
            </div>
            <p className='copyright'>&copy; 2024 Sahil Rai. All rights reserved.</p>
        </footer>
    )
}

export default Footer