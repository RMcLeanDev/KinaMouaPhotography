import react, {useState} from 'react';
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
import image9 from '../assets/image12.jpeg'
import image10 from '../assets/image22.jpeg'
import image11 from '../assets/image02.jpeg'
import image12 from '../assets/image32.jpeg'
import image13 from '../assets/image1.1.jpeg';
import image14 from '../assets/image2.1.jpeg';
import image15 from '../assets/image3.1.jpeg';
import image16 from '../assets/image4.1.jpeg';
import ZoomImage from './ZoomImage';
import '../scss/RecentWork.scss';
import 'aos/dist/aos.css';

function RecentWork(){

    const arry = [image15, image14, image16, image13, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];
    const [zoom, setZoom] = useState({show: false, imageInfo: null});

    return(
        <div>
            {zoom.show ? <ZoomImage close={() => setZoom({show: false, imageInfo: null})} image={zoom.imageInfo}/> : null}
            <h1><em>Recent Work</em></h1>
            <div className="recentWork">
                {Object.keys(arry).map(images => {
                    let image = arry[images];
                    return <img onClick={() => setZoom({show:true, imageInfo: image})} style={{maxHeight: "80vh", cursor: "pointer"}} src={image} data-aos="fade-up" alt=""/> 
                })}
            </div>
        </div>  
    )
}

export default RecentWork;