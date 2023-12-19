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
                            Node.js Websites
                        </Link>
                    </div>
                    <div>
                        <Link
                            to='/aspnet'
                            className={`link-style ${location.pathname === '/aspnet' ? 'active-link' : ''}`}
                            style={linkStyles('/aspnet')}
                            onClick={() => handleLinkClicked('/aspnet')}
                        >
                            Asp.Net Websites
                        </Link>
                    </div>
                    <div>
                        <Link
                            to='/mobile'
                            className={`link-style ${location.pathname === '/mobile' ? 'active-link' : ''}`}
                            style={linkStyles('/mobile')}
                            onClick={() => handleLinkClicked('/mobile')}
                        >
                            Kotlin Apps
                        </Link>
                    </div>
                    <div>
                        <Link
                            to='/desktop'
                            className={`link-style ${location.pathname === '/desktop' ? 'active-link' : ''}`}
                            style={linkStyles('/desktop')}
                            onClick={() => handleLinkClicked('/desktop')}
                        >
                            .NET Apps
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
                </div>
            </div>
        </>
    );
};

export default ProjectNavBar;
