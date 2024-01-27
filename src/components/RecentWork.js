import react from 'react';
import {useImageSize} from 'react-image-size';
import image1 from '../assets/image0.jpeg';
import image2 from '../assets/image1.jpeg';
import image3 from '../assets/image2.jpeg';
import image4 from '../assets/image3.jpeg';
import image5 from '../assets/image0.6dbc1fe9.jpeg'
import image6 from '../assets/image2.42dee657.jpeg'
import image7 from '../assets/image4.jpeg'
import image8 from '../assets/image06.jpeg'
import downArrow from '../assets/downArrow.png';
import '../scss/RecentWork.scss';
import 'aos/dist/aos.css';

function RecentWork(){

    let size = useImageSize(image1)[0];
    console.log(size)

    return(
        <div>
            <img src={downArrow} className="downArrow" alt=""/>
            <h1><em>Recent Work</em></h1>
            {
            size ? 
            <div className="recentWork">
                <img style={{maxHeight: "80vh"}} src={image1} data-aos="fade-up" alt=""/> 
                <img style={{maxHeight: "80vh"}} src={image4} data-aos="fade-up" alt=""/>     
                <img style={{maxHeight: "80vh"}} src={image2} data-aos="fade-up" alt=""/>
                <img style={{maxHeight: "80vh"}} src={image3} data-aos="fade-up" alt=""/> 
                <img style={{maxHeight: "80vh"}} src={image5} data-aos="fade-up" alt=""/> 
                <img style={{maxHeight: "80vh"}} src={image6} data-aos="fade-up" alt=""/> 
                <img style={{maxHeight: "80vh"}} src={image7} data-aos="fade-up" alt=""/> 
                <img style={{maxHeight: "80vh"}} src={image8} data-aos="fade-up" alt=""/> 
            </div>
            : "loading"
        }
        </div>  
    )
}

export default RecentWork;