import React from 'react';
import "./Navigation.css";
import Input from './Input/Input';

function Navigation(props) {

    return (
        <div className="Navigation">
            <div className="ContainItem">
                <div className="Logo">
                    <p>{props.logo}</p>
                </div>
                <div className="SearchBox">
                    <Input setData={props.setKeyWordHandler}/>
                    <button onClick={props.searchHandler}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
