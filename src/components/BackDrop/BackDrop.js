import React from 'react';
import './BackDrop.css';


function BackDrop(props) {
    return (
        <div>
            {props.show ? <div className="BackDrop" onClick={props.cancle}></div> : null}
        </div>
    )
}

export default BackDrop;