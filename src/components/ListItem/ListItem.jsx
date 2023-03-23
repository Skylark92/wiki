import { Link } from "react-router-dom";

export default function ListItem({ id, title }) {
  return (
    <li>
      <Link to={`/wiki/${id}`}>{title}</Link>
    </li>
  )
}
