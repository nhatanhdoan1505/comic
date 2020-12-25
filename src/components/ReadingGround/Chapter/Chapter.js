import React from 'react';
import './Chapter.css';

function Chapter(props) {

    const setChapter = () => {
        props.setChapter(props.href);
        props.setData(props.data);
    }

    return (
        <p onClick={setChapter} className="Chapter">{props.data}</p>
    )
}

export default Chapter;