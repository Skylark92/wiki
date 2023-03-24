import { useContext, useState } from "react";
import Button from "../../components/Button/Button";
import ListItem from "../../components/ListItem/ListItem";
import PostModal from "../../components/Main/PostModal";
import { WikiListContext } from "../../context/WikiListContext";
import "./Main.css";

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
    <section className="main-wrapper">
      <h2 className="blind">위키 목록</h2>
      {isModalOn && <PostModal closeModal={closeModal} />}
      <ul>
        {wikiList.slice(pageIndex, pageIndex + 5).map((item) => {
          return <ListItem className="main-list-item" key={item.id} id={item.id} title={item.title} />
        })}
      </ul>
      <div className="main-button-wrapper">
        <div className="main-page-button">
          <Button onClick={toPrev} text="이전" hidden={pageIndex < 5} />
          {pageIndex + 5 >= wikiList.length ||
            <Button onClick={toNext} text="다음" />}
        </div>
        <Button className="main-add-button" onClick={openModal} text="추가" />
      </div>
    </section>
  )
}
