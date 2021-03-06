import React from 'react';
import './SearchResult.css';
import { Row } from 'react-bootstrap';
import ComicItem from '../ComicItem/ComicItem';
import { LadderLoading } from 'react-loadingg';

function SearchResult(props) {
    const comics = props.comics;

    const conmicsResult = comics.map(comic => {
        return <ComicItem 
                    key={comic.title}
                    title={comic.title}
                    href={comic.href}
                    thumbnail={comic.thumbnail}/>
    })


    return(
        <div className="SearchResult">
            {props.loading ?<div className="Loading"> <LadderLoading size="large"/> </div> : ""}
            <Row
                lg={2}>
                    {conmicsResult}
            </Row>
            {props.noResult ? <p>No result</p> : ""}
        </div>
    )
}

export default SearchResult;