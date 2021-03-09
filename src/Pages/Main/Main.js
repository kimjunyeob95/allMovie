import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './Main.scss';

const Main = () =>{
  const [movieTitle, setMovieTitle] = useState("");
  const [movieSubTitle, setMovieSubTitle] = useState("");
  const [movieImage, setMovieImage] = useState("");
  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:9000/api/list')
      .then((res)=>{
        setMovieList(res.data);
      });
  },[]);


  
  return (
    <React.Fragment>
      <div className="intro">
        환영합니다.
      </div>
    </React.Fragment>
  );
}

export default Main;
