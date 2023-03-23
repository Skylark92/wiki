import { useContext } from "react"
import { Link } from "react-router-dom";
import { WikiListContext } from "../../context/WikiListContext"

export default function WikiContent({ data }) {
  const { wikiList } = useContext(WikiListContext);

  const ContentLinkConvert = (id, content, wikiList) => {
    if (!content) return;

    const target = wikiList.filter(item => id !== item.id && content.includes(item.title));

    const splitted = content.split(" ");

    let converted = splitted;
    for (const obj of target) {
      converted = converted.map(item => {
        if (item === obj.title) {
          return (<Link to={`/wiki/${obj.id}`} key={obj.id}>{obj.title}</Link>)
        } else return item;
      })
    }

    const newContent = [];
    for (let i = 0; i < converted.length; i++) {
      if (i > 0) newContent.push(" ");
      newContent.push(converted[i])
    }

    return newContent;
  }
  return (
    <p className="wiki-content">
      {ContentLinkConvert(data?.id, data?.content, wikiList)}
    </p>
  )
}
