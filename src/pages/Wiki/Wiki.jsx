import WikiContent from "../../components/Wiki/WikiContent";
import WikiRelated from "../../components/Wiki/WikiRelated";
import WikiTitle from "../../components/Wiki/WikiTitle";

export default function Wiki() {
  return (
    <div className="wiki-container">
      <WikiTitle title={"제목"} button={<button className="wiki-button" type="button">수정</button>} />
      <WikiContent content={"내용"} />
      <WikiRelated related={"page1"} />
    </div>
  )
}
