import React from 'react';
import { Row } from 'react-bootstrap';
import LibraryItem from '../LibraryItem/LibraryItem';
import { LadderLoading } from 'react-loadingg';

function Library(props) {
    const comics = props.comics;

    const conmicsResult = comics.map(comic => {
        return <LibraryItem 
                    key={comic.title}
                    title={comic.titile}
                    href={comic.href}
                    thumbnail={comic.thumbnail}/>
    })


    return(
        <div className="SearchResult">
            {props.loading ?<div className="Loading"> <LadderLoading size="large"/> </div> : ""}
            <h4>My Library</h4>
            <Row
                lg={2}>
                    {conmicsResult}
            </Row>
            {props.noResult ? <p>No result</p> : ""}
        </div>
    )
}

export default Library;