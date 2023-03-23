import axios from "axios";
import { useContext, useState } from "react"
import { WikiListContext } from "../../context/WikiListContext";
import Button from "../Button/Button";

export default function WikiEdit({ data, closeEditing }) {
  const { wikiList, setWikiList } = useContext(WikiListContext);
  const [editTitle, setEditTitle] = useState(data?.title);
  const [editContent, setEditContent] = useState(data?.content);

  const editTitleHandler = (event) => {
    setEditTitle(event.target.value);
  }

  const editContentHandler = (event) => {
    setEditContent(event.target.value);
  }

  const saveEditHandler = () => {
    if (!(editTitle && editContent)) {
      alert("제목 혹은 내용을 입력해주세요.");
    } else {
      const editData = {
        title: editTitle,
        content: editContent
      };

      axios.put(`http://localhost:8080/wiki/${data?.id}`, editData)
        .then(res => {
          const temp = wikiList.map(item => {
            if (item.id === res.data.id) return res.data;
            else return item;
          })
          setWikiList(temp);
          closeEditing();
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <form className="wiki-edit-form">
      <input type="text" value={editTitle} onChange={editTitleHandler} />
      <input type="textarea" value={editContent} onChange={editContentHandler} />
      <Button onClick={closeEditing} text="취소" />
      <Button onClick={saveEditHandler} text="저장" />
    </form>
  )
}
