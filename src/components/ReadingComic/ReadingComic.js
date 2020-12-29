import React from 'react';
import './ReadingComic.css';

function ReadingComic(props) {
    const images = props.images;
    const display = images.map(image => {
        return <img src={image.src} alt={image.alt} key={image.src}/>
    })

    return (
        <div className="ReadingComic">
            <div className="Content">
                <p style={{position:"fixed", color:"#d9534f", fontWeight:"600", margin:"auto auto"}}>Choose chapter!</p>
                {display}
            </div>
        </div>
    )
}

export default ReadingComic;