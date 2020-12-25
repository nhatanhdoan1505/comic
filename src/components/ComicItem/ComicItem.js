import React, {useState, useEffect} from 'react';
import './ComicItem.css';
import axios from '../../axios/axios';
import { Col } from 'react-bootstrap';
import Modal from '../Modal/Modal';
import ReadingGround from '../ReadingGround/ReadingGround';

function ComicItem(props) {

    const [link, setLink] = useState("");
    const [show, setShow] = useState(false);
    const [chapter, setChapter] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const request = await axios.post('/link', {"url": props.href});
            setLink(request.data);
        }
        fetchData();
    },[props.href]);

    const cancelHandler = () => {
        console.log("fsdonv");
        setShow(false);
    }

    const openHandler = () => {
        axios.post('/chapter', {'url' : `${link}`})
        .then(res => {
            setShow(true);
            setChapter(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div style={{overflowX:"scroll", overflowY:"hidden"}}>
            <Col>
                <div className="ComicItem">
                    <div className="Wraper">
                        <img src={props.thumbnail} alt={props.title}/>
                    </div>
                    <div className="ButtonGroup">
                        <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <button className="Read" onClick={openHandler}>Read Online</button>
                            <button className="Download">Add to Libry</button>
                        </div>   
                    </div>
                    <h6>{props.title}</h6>
                </div> 
            </Col>
            <Modal 
                show={show}
                cancel={cancelHandler}>
                    <ReadingGround
                        chapters={chapter}/>
            </Modal>
        </div>
        
    )
}

export default ComicItem;