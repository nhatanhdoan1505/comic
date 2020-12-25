import './App.css';
import Navigation from './components/Navigation/Navigation';
import React, { useState } from 'react';
import urlencode from 'urlencode';
import axios from './axios/axios';
import Helmet from 'react-helmet';
import SearchResult from './components/SearchResult/SearchResult';


function App() {
  const [keyWord, setKeyWord] = useState("");
  const url = "https://sachvui.com/search/?tu-khoa=";
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchHandler = () => {
    setLoading(true);
    axios.post('/search', {'url': `${url}${keyWord}`})
        .then(res => {
          setLoading(false);
            setComics(res.data);
        })
        .catch(err => {
            console.log(err);
        })
  }

  const setKeyWordHandler = (keyword) => {
    setKeyWord(urlencode(keyword));
  }

  return (
    <div className="App">
      <Helmet>
        <style>{'body{overflow-x: scroll; overflow-y: hidden}'}</style>
      </Helmet>
        <Navigation 
          logo="The World of Comic"
          setKeyWordHandler={setKeyWordHandler}
          searchHandler={searchHandler}/>
        <div className="Main"> 
        <SearchResult 
          comics={comics}
          loading={loading}/>
          {/* <ReadingComic images={images}/> */}
      </div>
    </div>
  );
}

export default App;
