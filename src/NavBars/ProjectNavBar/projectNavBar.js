import { useState } from 'react'
import Headings from '../../Components/SubHeaders/SubHeader'
import './projectNavBar.css'
import { Link } from 'react-router-dom'

const ProjectNavBar = () => {
    const [clickedLink, setClickedLink] = useState(null);

    const handleLickClicked = (index) => {
        setClickedLink(index)
    }

    const linkStyles = (index) => {
        return {
            color: index ===clickedLink ? 'white' : '#AC9C9C'
        }
    }

    return (
        <>
        <Headings context='Check out my' main_word='Projects' />
            <div className='project-navbar'>
                <div className='navbar-routes-container'>
                    <div><Link to='/' className='link-style' style={ linkStyles(0) } onClick={() => handleLickClicked(0)}>Websites</Link></div>
                    <div><Link to='/research' className='link-style' style={ linkStyles(1) } onClick={() => handleLickClicked(1)}>Research</Link></div>
                    <div><Link to='/mobile-desktop-apps' className='link-style' style={ linkStyles(2) } onClick={() => handleLickClicked(2)}>Mobile and Desktop</Link></div>
                    <div><Link to='/games' className='link-style' style={ linkStyles(3) } onClick={() => handleLickClicked(3)}>Games</Link></div>
                    <div><Link to='/rest' className='link-style' style={ linkStyles(4) } onClick={() => handleLickClicked(4)}>Others/Ongoing</Link></div>
                </div>
            </div>
        </>
    )
}

export default ProjectNavBar