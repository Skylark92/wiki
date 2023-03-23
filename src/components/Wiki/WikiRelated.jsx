import { useContext, useEffect, useState } from "react";
import { WikiListContext } from "../../context/WikiListContext";
import ListItem from "../ListItem/ListItem";

export default function WikiRelated({ data }) {
  const { wikiList } = useContext(WikiListContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const filtered = wikiList.filter((item) => data?.id !== item.id && item.content.includes(data?.title));

    setRelated(filtered);
  }, [data])

  return (
    <footer>
      <h3>연관 페이지 : </h3>
      <ul>
        {related.map(item => <ListItem key={item.id} id={item.id} title={item.title} />)}
      </ul>
    </footer>
  )
}
