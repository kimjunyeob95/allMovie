import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.scss';

const Main = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieSubTitle, setMovieSubTitle] = useState('');
  const [movieImage, setMovieImage] = useState('');
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/api/list').then((res) => {
      setMovieList(res.data);
    });
  }, []);

  return <React.Fragment></React.Fragment>;
};

export default Main;
