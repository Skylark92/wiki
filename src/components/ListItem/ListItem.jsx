import { Link } from "react-router-dom";

export default function ListItem({ className, id, title }) {
  return (
    <li className={className}>
      <Link to={`/wiki/${id}`}>{title}</Link>
    </li>
  )
}
