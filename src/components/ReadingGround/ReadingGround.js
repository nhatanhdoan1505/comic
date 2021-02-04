import React from 'react';
import './ReadingGround.css';
import Chapter from './Chapter/Chapter';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
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

    const previousChapterHandler = () => {
        if(chapterLink === ""){
            return;
        }
        let index = 0;

        for (let i = 0; i < chapters.length; i++){
            if (chapters[i].href === chapterLink){
                index = i;
            }
        }

        if(index === 0){
            return;
        }

        setChapterLink(chapters[index-1].href);
        setChapterData(chapters[index-1].data);
    }

    const nextChapterHandler = () => {
        if(chapterLink === ""){
            return;
        }
        let index = 0;

        for (let i = 0; i < chapters.length; i++){
            if (chapters[i].href === chapterLink){
                index = i;
            }
        }

        if(index === chapters.length){
            return;
        }

        setChapterLink(chapters[index+1].href);
        setChapterData(chapters[index+1].data);
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
                <div className="ChangeButton">
                    <div className="ButtonDisplay" style={{marginRight: "10px"}} onClick={previousChapterHandler}>
                        <FontAwesomeIcon icon={faBackward}/>
                        <p>Previous</p>
                    </div>
                    <div className="ButtonDisplay" onClick={nextChapterHandler}>
                        <FontAwesomeIcon icon={faForward}/>
                        <p>Next</p>
                    </div>
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