import React from 'react';
import './ReadingComic.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './ReadingComic.css';

function ReadingComic(props) {
    const images = props.images;

    const style = {}

    const items = images.map(image => {
        return <div data-src={image.src}></div>
    });
    return (
        <div className="ReadingComic">
            {/* <AwesomeSlider>
                {items}
            </AwesomeSlider> */}
            <img src={images[1].src}/>
        </div>
    )
}

export default ReadingComic;