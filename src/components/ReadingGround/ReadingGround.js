import React from 'react';
import './ReadingGround.css';
import Chapter from './Chapter/Chapter';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ReadingComic from '../ReadingComic/ReadingComic';
import { useEffect } from 'react';
import axios from '../../axios/axios';

function ReadingGround(props) {
    const chapters = props.chapters;
    const [chapterLink, setChapterLink] = useState(chapters[0]?.href);
    const [chapterData, setChapterData] = useState(chapters[0]?.data);
    const [selectChapter, setSelectChapter] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.post('/image', {"url":`${chapterLink}`})
            .then(res => {
                setImages(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[chapterLink])

    const setChapterLinkHandler = (href) => {
        setChapterLink(href);
    }

    const setChapterDataHandler = (data) => {
        setChapterData(data);
    }

    const selectChapterHandler = () => {
        setSelectChapter(!selectChapter);
    }

    const cancelDropChapterHandler = () => {
        setSelectChapter(false);
    }

    const chaptersDisplay = chapters.map(chapter => {
        return <Chapter 
                    data={chapter.data} 
                    href={chapter.href} 
                    setChapter={setChapterLinkHandler} 
                    key={chapter.data}
                    setData={setChapterDataHandler}/>
    })

    return (
        <div className="ReadingGround">
            <div className="DropChapter">
                <div className="Toggle" onClick={selectChapterHandler}>
                    <span>{chapterData}</span>
                    <FontAwesomeIcon icon={faChevronDown} color="black"/>
                </div>
            {selectChapter ? <div className="ToggleValue" onClick={cancelDropChapterHandler}>
                {chaptersDisplay}
            </div> : null}
            </div>
            <ReadingComic images={images}/>
        </div>
    )
}

export default ReadingGround;