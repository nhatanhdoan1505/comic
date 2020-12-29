import './App.css';
import Navigation from './components/Navigation/Navigation';
import React, { useEffect, useState } from 'react';
import urlencode from 'urlencode';
import axios from './axios/axios';
import Helmet from 'react-helmet';
import SearchResult from './components/SearchResult/SearchResult';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSave } from '@fortawesome/free-solid-svg-icons';
import Library from './components/Library/Library';
import api from './axios/laravel_api';


function App() {
  const [keyWord, setKeyWord] = useState("");
  const url = "https://sachvui.com/search/?tu-khoa=";
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [library, setlibrary] = useState(false);
  const [save, setSave] = useState([]);

  useEffect(() => {
    api.get('comic')
    .then(res => {
      setSave(res.data);
    })
  }, [])

  const searchHandler = () => {
    setLoading(true);
    axios.post('/search', {'url': `${url}${keyWord}`})
        .then(res => {
          setLoading(false);
          let result = res.data;
          console.log(result); 
          if(res.data.lenght !== 0){
            setComics(res.data);
            setNoResult(false);
          }else{
            setComics(res.data);
            setNoResult(true);
          }
        })
        .catch(err => {
            console.log(err);
        })
  }

  const setKeyWordHandler = (keyword) => {
    setKeyWord(urlencode(keyword));
  }

  const setLibraryView = () => {
    setlibrary(true);
  }

  const setSearchView = () => {
    setlibrary(false);
  }

  return (
    <div className="App">
      <Helmet>
        <style>{'body{overflow-x: scroll}'}</style>
      </Helmet>
        <Navigation 
          logo="The World of Comic"
          setKeyWordHandler={setKeyWordHandler}
          searchHandler={searchHandler}/>
        <div className="Main"> 
        <div className="SwitchGroup">
          <div className="SearchIcon" onClick={setSearchView}>
            <FontAwesomeIcon icon={faSearch}/>
          </div>
          <div className="LibraryIcon" onClick={setLibraryView}>
            <FontAwesomeIcon icon={faSave}/>
          </div>
        </div>
        {library ? <Library comics={save}/> : 
        <SearchResult 
          comics={comics}
          loading={loading}
          noResult={noResult}/>
        }
      </div>
    </div>
  );
}

export default App;
