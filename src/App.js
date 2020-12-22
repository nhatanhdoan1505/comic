import './App.css';
import Navigation from './components/Navigation/Navigation';
import React, { useState } from 'react';
import urlencode from 'urlencode';
import axios from './axios/axios';
import SearchResult from './components/SearchResult/SearchResult';
import ReadingComic from './components/ReadingComic/ReadingComic';


function App() {
  const [keyWord, setKeyWord] = useState("");
  const url = "https://sachvui.com/search/?tu-khoa=";
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);
  const images = [
    {
      "src": "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-0015d612.png",
      "class": "truyen-tranh",
      "alt": "truyen tranh sachvui.com"
    },
    {
      "src": "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-002481de.png",
      "class": "truyen-tranh",
      "alt": "truyen tranh sachvui.com"
    },
    {
      "src": "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-003f6438.png",
      "class": "truyen-tranh",
      "alt": "truyen tranh sachvui.com"
    },
    {
      "src": "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-004a190b.png",
      "class": "truyen-tranh",
      "alt": "truyen tranh sachvui.com"
    },
    {
      "src": "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-005fac55.png",
      "class": "truyen-tranh",
      "alt": "truyen tranh sachvui.com"
    },
    {
      "src": "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-00623c47.png",
      "class": "truyen-tranh",
      "alt": "truyen tranh sachvui.com"
    },
    {
      "src": "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-007c64a5.png",
      "class": "truyen-tranh",
      "alt": "truyen tranh sachvui.com"
    },
    {
      "src": "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-008c2d77.png",
      "class": "truyen-tranh",
      "alt": "truyen tranh sachvui.com"
    },
    {
      "src": "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-0092dc63.png",
      "class": "truyen-tranh",
      "alt": "truyen tranh sachvui.com"
    },
    {
      "src": "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-0101601d.png",
      "class": "truyen-tranh",
      "alt": "truyen tranh sachvui.com"
    },
    {
      "src": "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-0119361b.png",
      "class": "truyen-tranh",
      "alt": "truyen tranh sachvui.com"
    },
    {
      "src": "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-0126e03a.png",
      "class": "truyen-tranh",
      "alt": "truyen tranh sachvui.com"
    },
    {
      "src": "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-013294d1.png",
      "class": "truyen-tranh",
      "alt": "truyen tranh sachvui.com"
    },
    {
      "src": "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-014.png",
      "class": "truyen-tranh",
      "alt": "truyen tranh sachvui.com"
    },
    {
      "src": "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-015.png",
      "class": "truyen-tranh",
      "alt": "truyen tranh sachvui.com"
    },
    {
      "src": "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-016.png",
      "class": "truyen-tranh",
      "alt": "truyen tranh sachvui.com"
    },
    {
      "src": "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-017.png",
      "class": "truyen-tranh",
      "alt": "truyen tranh sachvui.com"
    },
    {
      "src": "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-018.png",
      "class": "truyen-tranh",
      "alt": "truyen tranh sachvui.com"
    },
    {
      "src": "https://img.sachvui.com/images/2018/4/tap-1-chuong-1-doremon-da-den-voi-nobita-nhu-the-nao-019.png",
      "class": "truyen-tranh",
      "alt": "truyen tranh sachvui.com"
    }
  ]

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
      <div className="Main">
        <Navigation 
          logo="The World of Comic"
          setKeyWordHandler={setKeyWordHandler}
          searchHandler={searchHandler}/> 
        {/* <SearchResult 
          comics={comics}
          loading={loading}/> */}
        <ReadingComic images={images}/>
      </div>
    </div>
  );
}

export default App;
