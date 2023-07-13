import './footer.css'

function Footer({theme}){
    return(
        <footer className={theme === "dark" ? 'dark-mode-footer' : ''}>
            <span className="footer-description">Full Stack Web Developer Bootcamp</span>
            <span className="footer-signature">Progamado por Carolina Fioroni</span>
        </footer>
    )
}
export default Footer;