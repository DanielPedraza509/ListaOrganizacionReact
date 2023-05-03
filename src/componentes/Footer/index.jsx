import "./Footer.css"

const Footer = () =>{
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/Jimmy.Pedraza.509'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://github.com/DanielPedraza509'>
                <img src="/img/git.png" alt='github' className="git"/>
            </a>
            <a href='https://www.instagram.com/danielpedraza_509/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <strong>Desarrollado por Daniel Pedraza</strong>
    </footer>
}

export default Footer