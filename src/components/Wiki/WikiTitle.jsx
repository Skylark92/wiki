import Button from "../Button/Button";

export default function WikiTitle({ title, onClick }) {
  return (
    <header className="wiki-title-wrapper">
      <h2 className="wiki-title">{title}</h2>
      <Button onClick={onClick} text="수정" />
    </header>
  )
}