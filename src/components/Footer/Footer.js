import './Footer.css'


function Footer() {
    return (
        <div className='footer'>

            <h6>© 2023 All Rights Reserved.</h6>

            <div className="wrapper">
                <div className="social-icons">

                    <a className="social-icon whatsapp" href="https://www.facebook.com/sifo.obidat" target="_blank" rel="author">
                     <i className="fa-brands fa-facebook-f"></i>
                    </a>

                    <a className="social-icon mail" href="obeidatsaif93@gmail.com" target="_blank" rel="author">
                        <i className="fa-sharp fa-solid fa-envelope"></i>
                    </a>

                    <a className="social-icon instagram" href="https://www.instagram.com/saif_obeidat7/" target="_blank"
                        rel="author">
                        <i className="fab fa-instagram"></i>
                    </a>

                </div>
            </div>

        </div>
    )
}


export default Footer;