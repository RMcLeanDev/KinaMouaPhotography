import react from 'react';
import '../scss/Footer.scss';
import instagram from '../assets/instaWhite.png';
import { Link } from 'react-router-dom';

function Footer(){
    
    return(
        <div className="footer">
            <div className="leftFooter">
                <h1>Kina Moua</h1>
                <Link to='/FAQ'>FAQ</Link>
                <p>Developed & Maintained by: <a target="_blank" href="https://www.ryanmclean.dev/#/">Ryan McLean</a></p>
            </div>
            <div className="rightfooter">
                <p>email: kinamouaphoto@gmail.com</p>
                <a target="_blank" href="https://www.instagram.com/kinamoua/?hl=en"><img src={instagram}/></a>
            </div>
        </div>
    )
}

export default Footer;