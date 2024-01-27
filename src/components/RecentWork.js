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
import ZoomImage from './ZoomImage';
import '../scss/RecentWork.scss';
import 'aos/dist/aos.css';

function RecentWork(){

    const arry = [image1, image2, image3, image4, image5, image6, image7, image8];
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