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
  const [like, setLike] = useState();
  const [modal, setModal] = useState(false);

  const likeCount = () => {
    setLike((prevCount) => prevCount + 1);
  };

  const updateTitle = () => {
    const updatedTitle = [...title];
    updatedTitle[0] = "여자 코드 추천";
    setTitle(updatedTitle);
  };

  const sortTitle = () => {
    const sortedTitle = [...title].sort();
    setTitle(sortedTitle);
  };

  const changeModalState = () => {
    setModal(!modal);
  };

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

      {title.map(function (a) {
        return (
          <div className="list">
            <h4>
              <button
                onClick={() => {
                  setModal(changeModalState);
                }}
              >
                {a}
              </button>
              <span onClick={likeCount}>👍</span> {like}
            </h4>
            <p>5월 23일 발행</p>
          </div>
        );
      })}

      {modal == true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
