import { Link } from "react-router-dom";

export default function MainListItem({ title }) {
  return (
    <li>
      <Link to={`/wiki/${title}`}>{title}</Link>
    </li>
  )
}
