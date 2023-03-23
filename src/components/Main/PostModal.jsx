import axios from "axios";
import { useContext, useState } from "react";
import { WikiListContext } from "../../context/WikiListContext";
import Button from "../Button/Button";
import "./PostModal.css";

export default function PostModal({ closeModal }) {
  const { wikiList, setWikiList } = useContext(WikiListContext);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const postTitleHandler = (event) => {
    setPostTitle(event.target.value);
  }

  const postContentHandler = (event) => {
    setPostContent(event.target.value)
  }

  const savePostHandler = () => {
    if (!(postTitle && postContent)) {
      alert("제목 혹은 내용을 입력해주세요.");
    } else {
      const data = {
        title: postTitle,
        content: postContent
      };

      axios.post("http://localhost:8080/wiki", data)
        .then(res => {
          setWikiList([...wikiList, res.data]);
          closeModal();
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <div className="post-modal-background">
      <div className="post-modal-wrapper">
        <label htmlFor="post-title">제목 : </label>
        <input
          id="post-title"
          type="text"
          value={postTitle}
          onChange={postTitleHandler}
        />
        <label htmlFor="post-content">내용 : </label>
        <input
          id="post-content"
          type="textarea"
          value={postContent}
          onChange={postContentHandler}
        />
        <Button onClick={closeModal} text="취소" />
        <Button onClick={savePostHandler} text="저장" />
      </div>
    </div>
  )
}
