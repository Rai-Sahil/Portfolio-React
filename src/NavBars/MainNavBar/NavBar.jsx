import './navBar.css'

const NavBar = () => {
    return (
        <nav className='navBar'>
            <span className='sahil-logo'>Sahil</span>
            <button className='say-hello-btn'>
                <span className='say-hello-text'>
                    Say Hello
                </span>
            </button>
        </nav>
    )
}

export default NavBar;