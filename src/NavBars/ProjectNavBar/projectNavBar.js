// ProjectNavBar.jsx

import { useState } from 'react';
import Headings from '../../Components/SubHeaders/SubHeader';
import './projectNavBar.css';
import { Link, useLocation } from 'react-router-dom';

const ProjectNavBar = () => {
    const location = useLocation();
    const [clickedLink, setClickedLink] = useState(location.pathname);

    const handleLinkClicked = (path) => {
        setClickedLink(path);
    };

    const linkStyles = (path) => {
        return {
            color: path === clickedLink ? 'white' : '#AC9C9C',
        };
    };

    return (
        <>
            <Headings context='Check out my' main_word='Projects' />
            <div className='project-navbar'>
                <div className='navbar-routes-container'>
                    <div>
                        <Link
                            to='/'
                            className={`link-style ${location.pathname === '/' ? 'active-link' : ''}`}
                            style={linkStyles('/')}
                            onClick={() => handleLinkClicked('/')}
                        >
                            Websites
                        </Link>
                    </div>
                    <div>
                        <Link
                            to='/research'
                            className={`link-style ${location.pathname === '/research' ? 'active-link' : ''}`}
                            style={linkStyles('/research')}
                            onClick={() => handleLinkClicked('/research')}
                        >
                            Research
                        </Link>
                    </div>
                    <div>
                        <Link
                            to='/mobile-desktop-apps'
                            className={`link-style ${location.pathname === '/mobile-desktop-apps' ? 'active-link' : ''}`}
                            style={linkStyles('/mobile-desktop-apps')}
                            onClick={() => handleLinkClicked('/mobile-desktop-apps')}
                        >
                            Mobile and Desktop
                        </Link>
                    </div>
                    <div>
                        <Link
                            to='/games'
                            className={`link-style ${location.pathname === '/games' ? 'active-link' : ''}`}
                            style={linkStyles('/games')}
                            onClick={() => handleLinkClicked('/games')}
                        >
                            Games
                        </Link>
                    </div>
                    <div>
                        <Link
                            to='/rest'
                            className={`link-style ${location.pathname === '/rest' ? 'active-link' : ''}`}
                            style={linkStyles('/rest')}
                            onClick={() => handleLinkClicked('/rest')}
                        >
                            Others/Ongoing
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectNavBar;
