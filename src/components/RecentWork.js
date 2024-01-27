import react from 'react';
import {useImageSize} from 'react-image-size';
import image1 from '../assets/image0.jpeg';
import image2 from '../assets/image1.jpeg';
import image3 from '../assets/image2.jpeg';
import image4 from '../assets/image3.jpeg';
import '../scss/RecentWork.scss';
import 'aos/dist/aos.css';

function RecentWork(){

    console.log(useImageSize(image1)[0]);

    return(
        <div className="recentWork">
            <img src={image1} data-aos="fade-up" alt=""/> 
            <img src={image4} data-aos="fade-up" alt=""/>     
            <img src={image2} data-aos="fade-up" alt=""/>
            <img src={image3} data-aos="fade-up" alt=""/> 
        </div>
    )
}

export default RecentWork;