import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './Login.scss';

const Login = () =>{
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

  const onClick = (e) => {
    const input_text = document.querySelectorAll('.input');
    for(let i=0; i<input_text.length;i++){
      input_text[i].value = '';
    }

    let details = JSON.stringify({
        mtitle: movieTitle,
        msubtitle: movieSubTitle,
    });
    const formData = new FormData();
    formData.append('file',movieImage);
    formData.append('movieData',details);

    axios.post("http://localhost:9000/api/insert",formData,{
      headers : {"Content-type" : "multypart/form-data"}
    })
      .then(res => {
        if(res.data.type){
          setMovieList([...movieList, {mtitle: movieTitle, msubtitle: movieSubTitle, mseq : res.data.mseq}]);
        }else{
          alert(res.data);
        }
      });
  };

  const btnModify = (e,mseq) => {
    let parent_target = e.target.parentNode.parentNode.parentNode;
    let target = e.target.parentNode.parentNode;

    let mtitle = target.children[1].children[0].children[1].value;
    let subtitle = target.children[1].children[1].children[1].value;
    
    let eq;
    for (var i = 0; i<parent_target.children.length;i++){
      if(target === parent_target.children[i]){
        eq = i;
      }
    }
    axios.post("http://localhost:9000/api/modify",{
      mseq : mseq,
      mtitle: mtitle,
      msubtitle: subtitle,
    })
      .then(res => {
        if(res.data==='success'){
          alert('수정되었습니다.');
          
        }else{
          alert(res.data);
        }
      });
  };
    
  const btnRemove = (mseq,index,mimage) => {
    let mList = movieList;
    
    axios.post("http://localhost:9000/api/remove",{
      mseq: mseq,
      mimage : mimage
    })
      .then(res => {
        
        if(res.data.type){
          mList.splice(index,1);
          setMovieList([...mList]);
          alert('DB,서버에서 삭제되었습니다.');
        }else{
          alert(res.data.msg);
        }
      });
  };
  
  return (
    <React.Fragment>
      <div className="App">
        <h3>영화 제목</h3>
        <input className="input" name="mtitle" onChange={e => setMovieTitle(e.target.value)}></input>
        <h3>영화 한줄평</h3>
        <input className="input" name="msubtitle" onChange={e => setMovieSubTitle(e.target.value)}></input>
        <h3>영화 이미지</h3>
        <input className="input" type="file" name="mimg" onChange={e => setMovieImage(e.target.files[0])}></input>
        <div className="btn-wrap">
          <button type="submit" onClick={onClick}>저장하기</button>
        </div>
      </div>
      <div className="movieList-wrap">
        {movieList.map((item,index) => {
          return (
            <div className="movie-wrap" key={item.mseq}>
              <div className="image-wrap">
                <img src={"http://localhost:9000/uploads/?mseq="+item.mseq} />
              </div>
              <div className="text-wrap">
                <div className="title-wrap">
                  <h1 className="movie-title">제목</h1>
                  <input defaultValue={item.mtitle}></input>
                </div>
                <div className="sub-wrap">
                  <h2 className="movie-title">한줄평</h2>
                  <input defaultValue={item.msubtitle}></input>
                </div>
              </div>
              <div className="btn-wrap">
                <a href={"http://localhost:9000/uploads/?mseq="+item.mseq} target="_blank" className="btn-downloads">크게보기</a>
                <button className="btn-modify" onClick={(e) => btnModify(e,item.mseq)}>수정</button>
                <button className="btn-remove" onClick={(e) => btnRemove(item.mseq,index,item.mimage)}>삭제</button>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Login;
