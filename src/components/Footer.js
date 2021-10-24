import react from 'react';
import '../scss/Footer.scss';
import instagram from '../assets/instaWhite.png';

function Footer(){
    return(
        <div className="footer">
            <div className="leftFooter">
                <h1>Kina Moua</h1>
                <p/>
                <p>Developed & Mainted by: Ryan McLean</p>
            </div>
            <div className="rightfooter">
                <p>email: kinamouaphoto@gmail.com</p>
                <a target="_blank" href="https://www.instagram.com/kinamoua/?hl=en"><img src={instagram}/></a>
            </div>
        </div>
    )
}

export default Footer;