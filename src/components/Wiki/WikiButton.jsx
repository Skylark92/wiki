export default function WikiButton() {

  const clickHandler = () => {
    alert("수정");
  }
  return (
    <button
      className="wiki-button"
      type="button"
      onClick={clickHandler}
    >
      수정
    </button>
  )
}
