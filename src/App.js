import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [title, setTitle] = useState([
    "남자 코드 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  //let [like, setLike] = useState(0);
  const [like, setLike] = useState([0,0,0]);
  const [modal, setModal] = useState(false);

  const likeCount = () => {
    setLike((prevCount) => prevCount + 1);
  };


  const sortTitle = () => {
    const sortedTitle = [...title].sort();
    setTitle(sortedTitle);
  };


  const changeModalState = () => {
    setModal(!modal);
  };

  const [selectedTitle, setSelectedTitle] = useState(0);

  const [makeTitle, setMakeTitle] = useState('');

  const deleteTitle = (index) => {
      const newTitle = title.filter((a,i)=>i !==index);
      setTitle(newTitle);
    }

    const updateTitle = () => {
        if(makeTitle){
            //const newTitle = [...title, makeTitle];
            //setTitle(newTitle);
            //최상단에 올리는 로직은 아래에 다시 작성
            const newTitle = [...title];
            newTitle.unshift(makeTitle);
            setTitle(newTitle);
            setMakeTitle('');

            const newLike = [...like, 0];
            setLike(newLike);
        }
    };

    const getCurrentDate = () => {
        const currentDate = new Date();
        const options = {month: 'long', day: 'numeric'};
        return currentDate.toLocaleString('ko-KR', options);
    }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={updateTitle}>글수정</button>
      <button onClick={sortTitle}>글정렬</button>
      {/*      <div className="list">
        <h4>
          {title[0]} <span onClick={likeCount}>👍</span> {like}
        </h4>
        <p>5월 23일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>5월 23일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={changeModalState}>{title[2]}</h4>
        <p>5월 23일 발행</p>
      </div>*/}

      {title.map(function (a,i) {
        return (
          <div className="list">
            <h4 onClick={() => {changeModalState(); setSelectedTitle(i);}}>
              {title[i]}
              <span onClick={(e)=>{e.stopPropagation();
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy);
              }}>👍</span> {like[i]}
            </h4>
            <p>{getCurrentDate()}</p>
            <button onClick={()=>deleteTitle(i)}>삭제</button>
          </div>
        );
      })}
       <input type="text" value={makeTitle} onChange={(e)=>{
           setMakeTitle(e.target.value);
           console.log(makeTitle)}
       }
       />
       <button onClick={()=>{updateTitle()}}>글발행</button>
      {modal == true ? <Modal color={'yellow'} title={title} selectedTitle={selectedTitle} updateTitle={updateTitle}/> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{background : props.color}}>
      <h4>{props.title[props.selectedTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.updateTitle}>글수정</button>
    </div>
  );
}

export default App;