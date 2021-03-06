import React, {useState, useEffect} from 'react';
import './ComicItem.css';
import axios from '../../axios/axios';
import { Col } from 'react-bootstrap';
import Modal from '../Modal/Modal';
import ReadingGround from '../ReadingGround/ReadingGround';
import api from '../../axios/laravel_api';

function ComicItem(props) {

    const [link, setLink] = useState("");
    const [show, setShow] = useState(false);
    const [chapter, setChapter] = useState([]);
    const [mes, setMes] = useState(false);

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

    const addLibrary = () => {
        api.post('/comic', {"thumbnail": `${props.thumbnail}`, "titile": `${props.title}`, "href": `${props.href}`})
        .then(res => {
            setMes(true);
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
                            <button className="Download" onClick={addLibrary}>Add to Libry</button>
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
            {mes ? <p style={{textAlign: "center", color:"#5cb85c"}}>Save successfully</p> : null}
        </div>
        
    )
}

export default ComicItem;