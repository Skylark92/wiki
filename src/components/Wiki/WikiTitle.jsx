import WikiButton from "./WikiButton";

export default function WikiTitle({ title }) {
  return (
    <header className="wiki-title-wrapper">
      <h2 className="wiki-title">{title}</h2>
      <WikiButton />
    </header>
  )
}