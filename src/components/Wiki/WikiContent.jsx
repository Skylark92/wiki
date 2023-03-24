import { useContext } from "react"
import { Link } from "react-router-dom";
import { WikiListContext } from "../../context/WikiListContext"

export default function WikiContent({ data }) {
  const { wikiList } = useContext(WikiListContext);

  const ContentLinkConvert = (id, content, wikiList) => {
    if (!content) return;

    const target = wikiList.filter(item => id !== item.id && content.includes(item.title));

    if (target.length === 0) return content;

    const targetLinkConvert = (str, targetStr, targetId) => {
      const temp = str.split(targetStr);
      const tempArr = [];
      for (let i = 0; i < temp.length; i++) {
        if (i === 0) tempArr.push(temp[i]);
        else {
          tempArr.push((<Link to={`/wiki/${targetId}`}>{targetStr}</Link>))
          tempArr.push(temp[i])
        }
      }

      return tempArr;
    }

    const flat = (array) => {
      const newArr = [];

      for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          for (let j = 0; j < array[i].length; j++) {
            newArr.push(array[i][j]);
          }
        } else if (!array[i]) continue;
        else newArr.push(array[i]);
      }

      return newArr;
    }

    let newContent = [];
    for (let i = 0; i < target.length; i++) {
      if (i === 0) {
        newContent.push(targetLinkConvert(content, target[i].title, target[i].id));
      } else if (i > 0) {
        for (let j = 0; j < newContent.length; j++) {
          if (typeof newContent[j] === "string" && newContent[j].includes(target[i].title)) {
            newContent[j] = targetLinkConvert(newContent[j], target[i].title, target[i].id);
          }
        }
      }
      newContent = flat(newContent);
    }

    return newContent;
    // const splitted = content.split(" ");

    // let converted = splitted;
    // for (const obj of target) {
    //   converted = converted.map(item => {
    //     if (item === obj.title) {
    //       return (<Link to={`/wiki/${obj.id}`}>{obj.title}</Link>)
    //     } else return item;
    //   })
    // }

    // const newContent = [];
    // for (let i = 0; i < converted.length; i++) {
    //   if (i > 0) newContent.push(" ");
    //   newContent.push(converted[i])
    // }

    // return newContent;
  }
  return (
    <p className="wiki-content">
      {ContentLinkConvert(data?.id, data?.content, wikiList)}
    </p>
  )
}
