import React, {useState, useEffect} from 'react';
import './ComicItem.css';
import axios from '../../axios/axios';
import { Col } from 'react-bootstrap';


function ComicItem(props) {

    const [link, setLink] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.post('/link', {"url": props.href});
            setLink(request.data);
        }
        fetchData();
    },[props.href]);

    return (
        <Col>
            <div className="ComicItem">
                <a href={props.href}><img src={props.thumbnail} alt={props.title}/></a>
                <a href={props.href}><h6>{props.title}</h6></a>
            </div>
        </Col>
    )
}

export default ComicItem;