import './navBar.css'

function handleSayHelloClick() {
    const email = 'raisahil580@gmail.com'; 
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
}

const NavBar = () => {
    return (
        <nav className='navBar'>
            <span className='sahil-logo'>Sahil</span>
            <button className='say-hello-btn' onClick={ handleSayHelloClick } >
                <span className='say-hello-text'>
                    Say Hello
                </span>
            </button>
        </nav>
    )
}

export default NavBar;
