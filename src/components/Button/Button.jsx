import "./Button.css";

export default function Button({ className, onClick, text, hidden }) {
  return (
    <button
      className={className}
      type="button"
      onClick={onClick}
      style={{ visibility: hidden ? "hidden" : "visible" }}
    >
      {text}
    </button>
  )
}
