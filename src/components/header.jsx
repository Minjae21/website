const Header = () => {

    function scrollToHeader() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <header className="header">
            <div className="logo-container">
                <a href="#" onClick={scrollToHeader}><img src="/cloud.png" alt="Logo" className="pageLogo" /></a>
            </div>
            <nav className="nav">
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;