import MainListItem from "../../components/Main/MainListItem";

export default function Main() {
  return (
    <div className="main-container">
      <h2>위키 목록</h2>
      <ul>
        <MainListItem title={"제목1"} />
      </ul>
    </div>
  )
}
