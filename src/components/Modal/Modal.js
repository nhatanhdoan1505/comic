import React from 'react';
import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import BackDrop from '../BackDrop/BackDrop';

function Modal(props) {
    return (
        <div>
            <BackDrop 
                show={props.show}/>
            <div 
                className="Modal"
                style={{transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'}}>
                <div className="CancleButton" onClick={props.cancel}>
                    <FontAwesomeIcon 
                        icon={faTimes}
                        color="black"/>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;