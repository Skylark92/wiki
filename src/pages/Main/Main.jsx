import { useContext, useState } from "react";
import Button from "../../components/Button/Button";
import MainListItem from "../../components/Main/MainListItem";
import PostModal from "../../components/Main/PostModal";
import { WikiListContext } from "../../context/WikiListContext";

export default function Main() {
  const { wikiList } = useContext(WikiListContext);
  const [pageIndex, setPageIndex] = useState(0);
  const [isModalOn, setIsModalOn] = useState(false);

  const toNext = () => {
    if (pageIndex + 5 >= wikiList.length) return;
    setPageIndex(pageIndex + 5);
  }

  const toPrev = () => {
    if (pageIndex < 5) return;
    setPageIndex(pageIndex - 5);
  }

  const openModal = () => {
    setIsModalOn(true);
  }

  const closeModal = () => {
    setIsModalOn(false);
  }

  return (
    <div className="main-container">
      <h2>위키 목록</h2>
      <ul>
        {wikiList.slice(pageIndex, pageIndex + 5).map((item) => {
          return <MainListItem key={item.id} id={item.id} title={item.title} />
        })}
      </ul>
      {isModalOn && <PostModal closeModal={closeModal} />}
      {pageIndex < 5 || <Button onClick={toPrev} text="이전" />}
      {pageIndex + 5 >= wikiList.length || <Button onClick={toNext} text="다음" />}
      <Button onClick={openModal} text="추가" />
    </div>
  )
}
