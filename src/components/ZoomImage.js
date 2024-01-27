import react from 'react'

function ZoomImage(props){

    console.log(props);

    return (
        <div className="zoomImage">
            <h1 onClick={props.close}>X</h1>
            {props.image ? <img src={props.image}/>: "loading"}
        </div>
    )
}

export default ZoomImage;